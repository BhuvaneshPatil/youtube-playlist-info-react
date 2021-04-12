import styled from "styled-components";

export const ChannelIntro = styled.div`
	display: flex;
	/* justify-content: center; */
	align-items: center;
	align-self: flex-start;
	border-bottom: 1px solid #f9f9f9;
	padding-bottom: 20px;
`;

export const ChannelPhoto = styled.img`
	height: 60px;
	width: 60px;
	border-radius: 100px;
`;

export const ChannelName = styled.a`
	color: #f4f4f4;
	margin-left: 20px;
	font-size: 1.3rem;
	font-weight: 400;
	letter-spacing: 2.5px;
	text-decoration: none;
	/* padding-bottom: 20px; */
	&:hover {
		text-decoration: underline;
	}
`;

export const ChannelDescription = styled.div`
	padding-top: 20px;
	font-size: 1.1rem;
	text-align: justify;
`;
export const LiitleTitle = styled.div`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.2rem")};
	color: #fff;
	font-weight: 400;
	letter-spacing: 2px;
	margin-bottom: ${({ marginSize }) => (marginSize ? marginSize : "20px")};
	display: flex;
	align-items: center;
	gap: 10px;
`;
export const TextColorForValue = styled.div`
	color: #999;
`;
export const ChannelInfo = styled.div`
	padding-top: 20px;
	display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;
	flex-wrap: wrap;
	gap: 25px;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		gap: 5px;
	}
`;
export const InfoCard = styled.div`
	width: 32%;
	padding: 20px;
	background-color: #212121;
	border-radius: 5px;
	/* margin: 5px 0; */
	box-shadow: 0.5px 2px 5px rgba(0, 0, 0, 0.5);
	border-left: 4px solid #ff9800;
	@media screen and (max-width: 960px) {
		width: 100%;
		margin-top: 20px;
	}
`;

export const IconWrapper = styled.div`
	color: #999;
	font-size: 1.3rem;
	display: inline;
	fill: #999;
`;

export const NumberValue = styled.div`
	color: #999;
	font-size: 1.3rem;
	letter-spacing: 2.5px;
	font-weight: bold;
`;
