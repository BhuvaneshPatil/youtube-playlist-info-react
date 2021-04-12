import styled from "styled-components";
import { BoxShadow, Container } from "../../globalStyles";
export const LinkAccept = styled.input`
	/* border: 1px solid #999; */
	background-color: #282d33;
	outline: none;
	border: none;
	color: #fff;
	padding: 8px 16px;
	font-size: 1.3rem;
	width: 600px;
	border-radius: 5px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
		0 4px 4px rgba(0, 0, 0, 0.15);
	&:focus {
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25),
			0 4px 4px rgba(0, 0, 0, 0.25);
		/* border: 2px solid #999; */
		border-radius: 5px;
	}
`;
export const HeaderContainer = styled(Container)`
	height: 30vh;
	${Container};
`;
export const Button = styled.button`
	background-color: #17b978;
	padding: 8px 16px;
	font-size: 1.3rem;
	color: #fff;
	cursor: pointer;
	outline: none;
	border: none;
	border-radius: 5px;
	margin: 20px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
		0 4px 4px rgba(0, 0, 0, 0.15);
	&:hover {
		background-color: #086972;
	}
	transition: all 0.25sec ease-out;
	${BoxShadow}
`;
