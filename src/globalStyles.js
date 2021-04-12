import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;

}
body {
	font-family: "Poppins", sans-serif;
	color: #071a52;
	 scroll-behavior:smooth; 
}
`;
export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const BoxShadow = styled.div`
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
		0 4px 4px rgba(0, 0, 0, 0.15);
`;
export const MainComponents = styled.div`
	min-height: 120px;
	width: 100%;
	background-color: #212121;
	min-height: 100vh;
	padding: 2rem 2rem;
`;
export const MainChildren = styled.div`
	background-color: #111;
	border-radius: 5px;
	box-shadow: 2px 2px 5px #222;
	min-height: 20px;
	padding: 20px;
	flex: ${({ flexNum }) => flexNum};
	box-shadow: 0.5px 2px 5px rgba(0, 0, 0, 0.9);
`;
export const ToolTip = styled.div`
	display: none;
	width: 230px;
	background-color: rgba(0, 0, 0, 1);
	padding: 5px;
	opacity: 0.5;
	text-align: center;
	position: absolute;
	top: 120%;
	left: -50%;
	font-size: 0.9rem;
	font-family: sans-serif;
	border-radius: 5px;
	transition: all 0.3s 0s ease-in-out;
	&::after {
		content: "";
		position: absolute;

		/* position tooltip correctly */
		left: 20%;
		margin-left: -5px;

		/* vertically center */
		top: 0%;
		transform: translateY(-50%);

		/* the arrow */
		border: 10px solid #000;
		border-color: transparent black transparent transparent;
	}
`;
export const ToolTipBox = styled.div`
	position: relative;
	&:hover ${ToolTip} {
		display: block;
	}
`;
export const FeedBackText = styled.h1`
	color: #666;
	font-size: 2rem;
	max-width: 500px;
	text-align: center;

	margin: auto;
	margin-top: 40px;
`;
export const ExternalLink = styled.a`
	text-decoration: none;
	color: inherit;
	&::hover {
		border: 1px solid white;
	}
`;
export default GlobalStyle;
