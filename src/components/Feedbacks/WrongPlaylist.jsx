import { motion } from "framer-motion";
import React from "react";
import wrongPlaylist from "../../assets/wrongId.svg";
import { FeedBackText } from "../../globalStyles";

const WrongPlaylist = () => {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<img
					src={wrongPlaylist}
					style={{ width: "300px", margin: "auto" }}
				/>
			</div>
			<FeedBackText>Looks like the playlist Id is not valid</FeedBackText>
		</>
	);
};

export default WrongPlaylist;
