import { parse } from "iso8601-duration";
export const channelIdSeparator = (bigArr) => {
	if (bigArr.length <= 50) {
		return [bigArr.join(",")];
	} else {
		let tempArr = [];
		let smallArr = [];
		bigArr.forEach((item, index) => {
			smallArr.push(item);
			if (index + 1 === bigArr.length || (index + 1) % 50 === 0) {
				tempArr.push(smallArr);
				smallArr = [];
			}
		});
		return tempArr.map((item) => {
			return item.join(",");
		});
	}
};
const durationCompare = (initial, newVal) => {
	const initialValue = initial["duration"];
	const newValue = newVal["duration"];
	const initialSeconds =
		initialValue["hours"] * 3600 +
		initialValue["minutes"] * 60 +
		initialValue["seconds"];
	const newSeconds =
		newValue["hours"] * 3600 +
		newValue["minutes"] * 60 +
		newValue["seconds"];
	return newSeconds > initialSeconds;
};
export const playListDataProcessor = (allVideos) => {
	const initialDur = parse(allVideos[0]["contentDetails"]["duration"]);
	const initialSnippet = { ...allVideos[0]["snippet"], duration: initialDur };
	const initialStat = { ...allVideos[0]["statistics"] };
	let response = {
		duration: {
			years: 0,
			months: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		},
		statistics: {
			totalViews: 0,
			totalDislikes: 0,
			totalLikes: 0,
			totalComments: 0,
		},
		mostLikedVideo: {
			snippet: initialSnippet,
			stats: initialStat,
		},
		mostDislikedVideo: {
			snippet: initialSnippet,
			stats: initialStat,
		},
		mostViewedVideo: {
			snippet: initialSnippet,
			stats: initialStat,
		},
		leastViewedVideo: {
			snippet: initialSnippet,
			stats: initialStat,
		},
		longestVideo: {
			snippet: initialSnippet,
			stats: initialStat,
		},
		shortestVideo: {
			snippet: initialSnippet,
			stats: initialStat,
		},

		videoArr: [],
	};
	console.log(allVideos[0]["contentDetails"]);
	allVideos.forEach((vid) => {
		response.videoArr.push(vid);
		const dur = parse(vid["contentDetails"]["duration"]);
		const currentStat = vid.statistics;
		const currentSnip = {
			...vid.snippet,
			videoId: vid["id"],
			duration: dur,
		};
		response["duration"] = {
			hours: response["duration"]["hours"] + dur["hours"],
			minutes: response["duration"]["minutes"] + dur["minutes"],
			seconds: response["duration"]["seconds"] + dur["seconds"],
		};
		response = {
			...response,
			statistics: {
				totalViews:
					Number(response["statistics"]["totalViews"]) +
					Number(currentStat.viewCount),
				totalDislikes:
					Number(response["statistics"]["totalDislikes"]) +
					Number(currentStat.dislikeCount),
				totalComments:
					Number(response["statistics"]["totalComments"]) +
					Number(currentStat.commentCount),
				totalLikes:
					Number(response["statistics"]["totalLikes"]) +
					Number(currentStat.likeCount),
			},
		};
		if (
			Number(response.mostLikedVideo["stats"].likeCount) <=
			Number(currentStat.likeCount)
		) {
			response["mostLikedVideo"] = {
				snippet: currentSnip,
				stats: currentStat,
			};
		}
		if (
			Number(response.mostDislikedVideo["stats"].dislikeCount) <=
			Number(currentStat.dislikeCount)
		) {
			response["mostDislikedVideo"] = {
				snippet: currentSnip,
				stats: currentStat,
			};
		}
		if (
			Number(response.mostViewedVideo["stats"].viewCount) <=
			Number(currentStat.viewCount)
		) {
			response["mostViewedVideo"] = {
				snippet: currentSnip,
				stats: currentStat,
			};
		}
		if (
			Number(response.leastViewedVideo["stats"].viewCount) >=
			Number(currentStat.viewCount)
		) {
			response["leastViewedVideo"] = {
				snippet: currentSnip,
				stats: currentStat,
			};
		}

		if (durationCompare(response.longestVideo.snippet, currentSnip)) {
			response["longestVideo"] = {
				snippet: currentSnip,
				stats: currentStat,
			};
		}
		if (!durationCompare(response.shortestVideo.snippet, currentSnip)) {
			response["shortestVideo"] = {
				snippet: currentSnip,
				stats: currentStat,
			};
		}
	});
	return response;
};
