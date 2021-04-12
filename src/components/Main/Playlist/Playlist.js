import React, { useEffect } from "react";
import { ToolTipBox, ToolTip } from "../../../globalStyles";
import { suffixValue } from "../../../helpers/processors/formatters";
import { LiitleTitle } from "../Channel/Channel.elements";
import {
	InfoCard,
	NumberValue,
	PlaylistDescription,
	PlaylistInfo,
	PlaylistIntro,
	PlaylistName,
	PlaylistPhoto,
	TextColorForValue,
} from "./Playlist.elements";
const infoCardTitleFontSize = "1.1rem";
const Playlist = ({ playlistPackage }) => {
	const totalWatchTime =
		playlistPackage["duration"]["hours"] * 60 +
		playlistPackage["duration"]["minutes"] +
		Number((playlistPackage["duration"]["seconds"] / 60).toFixed(0));
	useEffect(() => {
		setTimeout(() => {
			scroller();
		}, 500);
		console.log(playlistPackage);
	}, []);
	return (
		<div>
			<PlaylistIntro>
				<PlaylistPhoto src={playlistPackage.snip.thumbnails.high.url} />
				<PlaylistName href="/">
					{playlistPackage.snip.localized.title}
				</PlaylistName>
			</PlaylistIntro>
			<PlaylistDescription>
				<LiitleTitle>💬Description:-</LiitleTitle>
				<TextColorForValue>
					<p> {playlistPackage.snip.localized.description}</p>
				</TextColorForValue>
			</PlaylistDescription>
			<PlaylistInfo>
				<InfoCard>
					<LiitleTitle fontSize={infoCardTitleFontSize}>
						Total Videos:-
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{playlistPackage.videoArr.length}
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
				<InfoCard>
					<LiitleTitle>Total Minutes:-</LiitleTitle>
					<NumberValue>{totalWatchTime}</NumberValue>
				</InfoCard>
				<InfoCard>
					<LiitleTitle fontSize={infoCardTitleFontSize}>
						Total Views:-
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{suffixValue(playlistPackage.statistics.totalViews)}
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
				<InfoCard>
					<LiitleTitle fontSize={infoCardTitleFontSize}>
						Likes:-
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{suffixValue(playlistPackage.statistics.totalLikes)}
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
				<InfoCard>
					<LiitleTitle fontSize={infoCardTitleFontSize}>
						Dislikes :-
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{suffixValue(
								playlistPackage.statistics.totalDislikes
							)}
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
				<InfoCard>
					<LiitleTitle fontSize={infoCardTitleFontSize}>
						Avg. video length(in minutes) :-
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{(
								totalWatchTime / playlistPackage.videoArr.length
							).toFixed(0)}
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
			</PlaylistInfo>
		</div>
	);
};
const scroller = () => {
	let timer;
	for (let i = 0; i < 250; i++) {
		timer = setTimeout(() => {
			window.scrollTo(0, i);
		}, i * 4);
	}
	clearTimeout(timer);
};

export default Playlist;
