import React, { useEffect, useState } from "react";
import GlobalStyle, { FeedBackText, MainComponents } from "./globalStyles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { fetchPlaylist, idChecker } from "./helpers/fetchers/playlistFetcher";
import not_found from "./assets/not_found.svg";
import WrongPlaylist from "./components/Feedbacks/WrongPlaylist";
function App() {
	const [url, setUrl] = useState(null);
	const [isEmpty, setIsEmpty] = useState(true);
	const [isValid, setIsValid] = useState(false);
	const [playListAvail, setPlayListAvail] = useState(true);
	useEffect(() => {
		console.log(url);

		if (url) {
			if (url === "none") {
				setIsValid(false);
			} else {
				if (idChecker(url)) {
					setIsValid(true);
					fetchPlaylist(url);
				}
			}
			setIsEmpty(false);
		} else {
			setIsEmpty(true);
		}
	}, [url]);

	return (
		<div className="App">
			<GlobalStyle />
			<MainComponents>
				<Header setUrl={setUrl} />
				{isEmpty ? (
					<></>
				) : isValid ? (
					<>
						{playListAvail ? (
							<>
								<Main playListId={url} />
							</>
						) : (
							<WrongPlaylist />
						)}
					</>
				) : (
					<>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								width: "100%",
							}}
						>
							<img
								src={not_found}
								alt=""
								style={{ width: "300px", margin: "auto" }}
							/>
						</div>
						<FeedBackText>
							Uh oh ! It seems like you have entered incorrect
							playlist url.
						</FeedBackText>
					</>
				)}
			</MainComponents>
		</div>
	);
}

export default App;
