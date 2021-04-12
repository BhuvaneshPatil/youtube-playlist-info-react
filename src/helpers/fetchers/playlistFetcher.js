import axios from "axios";
import { parse } from "iso8601-duration";
import { key, base_url } from "../../backend";
import {
	channelIdSeparator,
	playListDataProcessor,
} from "../processors/processors";

export const fetchPlaylist = async (playListID) => {
	const hey = await playListData(playListID);

	let passArr = hey.map((item) => {
		return item.snippet.resourceId.videoId;
	});
	const groupedIds = channelIdSeparator(passArr);
	let playlistPackage = await videoData(groupedIds).then((data) => {
		return data;
	});
	// console.log(parse("PT0H0M0S"));
	// console.log(playlistPackage);
	return axios
		.get(
			`${base_url}playlists?part=snippet%2CcontentDetails&id=${playListID}&key=${key}`
		)
		.then((data) => {
			// console.log(data.data);
			const snip = data.data.items[0].snippet;
			const id = data.data.items[0].id;
			return channelInfo(data.data.items[0].snippet.channelId).then(
				(res) => {
					return {
						valid: true,
						channelInfo: res,
						playlistPackage: { ...playlistPackage, id, snip },
					};
				}
			);
		});
};
export const channelInfo = async (channelId) => {
	const res = await axios.get(
		`${base_url}channels?part=contentDetails&part=snippet&part=topicDetails&part=statistics&id=${channelId}&key=${key}`
	);
	console.log(res.data);
	const data = res.data.items[0];
	const snippet = data.snippet;
	const statistics = data.statistics;

	return {
		id: data.id,
		basicInfo: {
			channelName: snippet.title,
			channelDes: snippet.description,
		},
		thumbnails: {
			thumbImage: snippet.thumbnails.default.url,
		},
		stats: {
			viewCount: statistics.viewCount,
			subscriberCount: statistics.subscriberCount,
			videoCount: statistics.videoCount,
		},
	};
};

const tokenWise = async (token, playListID) => {
	return await axios
		.get(
			`${base_url}playlistItems?part=snippet%2CcontentDetails&maxResults=50&pageToken=${token}&playlistId=${playListID}&key=${key}`
		)
		.then((secData) => {
			return secData.data;
		});
};
export const playListData = async (playlistId) => {
	let idArray = [];
	const res = await axios.get(
		`${base_url}playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${key}`
	);

	// console.log(res, "huhuh");
	let tempData = res.data.items;
	let flag = false;
	let token = "";
	if (res.data.nextPageToken) {
		flag = true;
		token = res.data.nextPageToken;
	}
	idArray = [...tempData];
	while (flag) {
		let received = await tokenWise(token, playlistId).then((data) => data);
		idArray = [...idArray, ...received.items];
		if (received.nextPageToken) {
			token = received.nextPageToken;
			continue;
		} else {
			flag = false;
		}
	}
	return idArray;
};
export const videoData = (groupedIds) => {
	let arr = [];
	let d = null;
	const requestsArr = groupedIds.map((item) => {
		return axios.get(
			`${base_url}videos?part=snippet%2Cstatistics%2CcontentDetails&id=${item}&maxResults=50&key=${key}`
		);
	});
	// console.log(requestsArr);
	return axios.all(requestsArr).then(
		axios.spread((...responses) => {
			[...responses].forEach((item) => {
				return arr.push(...item.data.items);
			});
			d = playListDataProcessor(arr);
			// console.log(d);
			return d;
		})
	);
};

function youtube_validate(url) {
	var regExp = /^(?:https?:\/\/)?(?:www\.)?youtube\.com(?:\S+)?$/;
	return url.match(regExp) && url.match(regExp).length > 0;
}
export const regexParser = (url) => {
	const reg = new RegExp("[&?]list=([a-z0-9_-]+)", "i");
	const match = reg.exec(url);

	if (match && match[1].length > 0 && youtube_validate(url)) {
		return match[1];
	} else {
		return "none";
	}
};

export async function idChecker(id) {
	const res = await axios.get(
		`${base_url}playlists?part=snippet&id=${id}&key=${key}`
	);
	console.log(res.data.items.length);
	// console.log(res.data.items.length);
	return res.data.items.length;
}
