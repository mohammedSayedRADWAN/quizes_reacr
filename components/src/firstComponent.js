import "./firstComponentStyle.css";

export default function FirstComponent() {
	const x = {
		name: "medo",
		age: 13,
	};
	const styleElement = {
		backgroundColor: "blue",
	};
	return (
		<div>
			<h1 style={styleElement}>{x.name}Hello World from seperate file</h1>
			<h1 className={x.name === "medo" ? "redBG" : "greenBG"}>cheack name</h1>
			<button onClick={SayHello} className="redBG">
				Click me
			</button>
		</div>
	);
}
function SayHello() {
	alert("helo from alert");
}
