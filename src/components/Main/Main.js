import React, { useEffect, useState } from "react";
import { MainChildren } from "../../globalStyles";
import {
	fetchPlaylist,
	idChecker,
} from "../../helpers/fetchers/playlistFetcher";
import Channel from "./Channel/Channel";
import Playlist from "./Playlist/Playlist";
import { motion } from "framer-motion";
import Spinner from "../Feedbacks/Spinner";
import WrongPlaylist from "../Feedbacks/WrongPlaylist";
const Main = ({ playListId }) => {
	const [isPlayValid, setIsPlayValid] = useState(true);
	const [channelData, setChannelData] = useState(null);
	const getData = async () => {
		await fetchPlaylist(playListId).then((data) => {
			console.log(data, "lplokok");
			setChannelData(data);
		});
	};
	useEffect(() => {
		setChannelData(null);
		console.log(idChecker(playListId));
		idChecker(playListId).then((data) => {
			if (data) {
				setIsPlayValid(true);
				getData();
			} else {
				setIsPlayValid(false);
			}
		});
		// idChecker(playListId).then((data) =>{
		// 	data?
		// 	(setIsPlayValid(true)
		// 	getData())
		// 	:
		// 		setIsPlayValid(false)

		// )
	}, [playListId]);
	useEffect(() => {
		console.log(isPlayValid);
	}, [isPlayValid]);
	if (!isPlayValid) {
		return <WrongPlaylist />;
	}
	if (channelData) {
		return (
			<motion.div>
				<MainChildren flexNum={1}>
					{channelData && (
						<Channel channelData={channelData.channelInfo} />
					)}
				</MainChildren>
				<MainChildren flexNum={1}>
					{channelData && (
						<Playlist
							playlistPackage={channelData.playlistPackage}
						/>
					)}
				</MainChildren>
			</motion.div>
		);
	} else {
		return <Spinner />;
	}
};

export default Main;
