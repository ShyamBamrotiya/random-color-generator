import { useEffect, useState } from "react";

export default function RandomColor() {
	const [typeofcolor, setTypeOfColor] = useState("hex");
	const [color, setcolor] = useState("#000000");

	function randomColorUtility(length) {
		return Math.floor(Math.random() * length);
	}

	function handleCreateRandomHexColor() {
		//#000000
		const hex = [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
		];
		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)];
		}
		setcolor(hexColor);
	}
	function handleCreateRandomRgbColor() {
		const r = randomColorUtility(256);
		const g = randomColorUtility(256);
		const b = randomColorUtility(256);

		setcolor(`rgb(${r},${g},${b}`);
	}

	useEffect(() => {
		if (typeofcolor === "rgb") handleCreateRandomRgbColor();
		else handleCreateRandomHexColor();
	}, [typeofcolor]);

	return (
		<div
			style={{
				width: "100vm",
				height: "100vh",
				background: color,
			}}
		>
			<button onClick={() => setTypeOfColor("hex")}>
				Create Hex Color
			</button>
			<button onClick={() => setTypeOfColor("rgb")}>
				Create Rgb Color
			</button>
			<button
				onClick={
					typeofcolor === "hex"
						? handleCreateRandomHexColor
						: handleCreateRandomRgbColor
				}
			>
				Generate Random Color
			</button>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "#fff",
					fontSize: "60px",
					marginTop: "50px",
					flexDirection: "column",
					gap: "20px",
				}}
			>
				<h3>{typeofcolor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	);
}
