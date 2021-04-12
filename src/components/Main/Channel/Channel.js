import React from "react";
import {
	ChannelIntro,
	ChannelPhoto,
	ChannelName,
	LiitleTitle,
	ChannelDescription,
	TextColorForValue,
	InfoCard,
	ChannelInfo,
	IconWrapper,
	NumberValue,
} from "./Channel.elements";
const Channel = ({ channelData }) => {
	return (
		<div>
			<ChannelIntro>
				<ChannelPhoto src={channelData.thumbnails.thumbImage} />
				<ChannelName
					href={`https://www.youtube.com/channel/${channelData.id}`}
				>
					{channelData.basicInfo.channelName}
				</ChannelName>
			</ChannelIntro>
			<ChannelDescription>
				<LiitleTitle>💬Description:-</LiitleTitle>
				<TextColorForValue>
					<p>{channelData.basicInfo.channelDes}</p>
				</TextColorForValue>
			</ChannelDescription>
			<ChannelInfo>
				<InfoCard>
					<LiitleTitle fontSize={"1.1rem"} marginSize={"8px"}>
						Subscribers:-
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{channelData.stats.subscriberCount / 1000000}M
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
				<InfoCard>
					<LiitleTitle fontSize={"1.1rem"} marginSize={"8px"}>
						Views:-
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{(channelData.stats.viewCount / 1000000).toFixed(2)}
							M
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
				<InfoCard>
					<LiitleTitle fontSize={"1.1rem"} marginSize={"8px"}>
						<div>Videos:-</div>
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{channelData.stats.videoCount}
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
				<InfoCard>
					<LiitleTitle fontSize={"1.1rem"} marginSize={"8px"}>
						<div>Avg. Views per Video:-</div>
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{(
								channelData.stats.viewCount /
								channelData.stats.videoCount
							).toFixed(0)}
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
				{/* <InfoCard>
					<LiitleTitle fontSize={"1.1rem"} marginSize={"8px"}>
						<div>Views to Subscribers Ratio:-</div>
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{(
								channelData.stats.viewCount /
								channelData.stats.subscriberCount
							).toFixed(2)}
						</NumberValue>
					</TextColorForValue>
				</InfoCard> */}
				<InfoCard>
					<LiitleTitle fontSize={"1.1rem"} marginSize={"8px"}>
						<div>Views to Subscribers Ratio:-</div>
					</LiitleTitle>
					<TextColorForValue>
						<NumberValue>
							{(
								channelData.stats.viewCount /
								channelData.stats.subscriberCount
							).toFixed(2)}
						</NumberValue>
					</TextColorForValue>
				</InfoCard>
			</ChannelInfo>
		</div>
	);
};

export default Channel;
