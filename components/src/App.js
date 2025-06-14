import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";

function App() {
	return (
		<div className="App">
			<FirstComponent />
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div style={{ width: "60%", display: "flex" }}>
					{/*posts start */}
					<div style={{ width: "70%" }}>
						<SecondComponent />
						<SecondComponent />
						<SecondComponent />
					</div>
					{/*posts End */}

					{/*sideMenue Start */}
					<div style={{ width: "30%" }}>
						<ThirdComponent />
					</div>

					{/*sideMenue End */}
				</div>
			</div>
		</div>
	);
}

export default App;
