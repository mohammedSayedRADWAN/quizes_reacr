import "./thirdComponent.css";
export default function ThirdComponent() {
	return (
		<div className={"parentThird"}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					justifyContent: "center",
				}}>
				<button className={"btn"}>click me</button>
				<button className={"btn"}>click me</button>
				<button className={"btn"}>click me</button>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					justifyContent: "center",
				}}>
				<button className={"btn"}>click me</button>
				<button className={"btn"}>click me</button>
				<button className={"btn"}>click me</button>
			</div>
		</div>
	);
}
