import React from "react";
import { regexParser } from "../../helpers/fetchers/playlistFetcher";
import { Button, HeaderContainer, LinkAccept } from "./Header.elements";
const Header = ({ setUrl }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		let url = e.target.linker.value;
		console.log(url);
		if (url) {
			url = regexParser(url);
			setUrl(url);
		} else {
			setUrl(null);
		}
	};
	return (
		<>
			<HeaderContainer>
				<form onSubmit={handleSubmit}>
					<LinkAccept
						placeholder="Paste the link here"
						name="linker"
						required
						autoFocus={true}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</HeaderContainer>
		</>
	);
};

export default Header;
