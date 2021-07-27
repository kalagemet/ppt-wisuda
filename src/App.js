import * as ReactPPTX from "react-pptx";
import Preview from "react-pptx/preview";
import { Presentation, Shape, Slide, Text } from "react-pptx";

const App = () => {
	const press = (
		<Presentation layout="16x10">
			<Slide>
				<Text
					style={{
						x: 3,
						y: 1,
						w: 3,
						h: 0.5,
						fontSize: 32,
					}}
				>
					STPN!
				</Text>
				<Shape
					type="rect"
					style={{
						x: 3,
						y: 1.55,
						w: 3,
						h: 0.1,
						backgroundColor: "#FF0000",
					}}
				/>
			</Slide>
			<Slide>
				<Text
					style={{
						x: 3,
						y: 1,
						w: 3,
						h: 0.5,
						fontSize: 32,
					}}
				>
					STPN!
				</Text>
				<Shape
					type="rect"
					style={{
						x: 3,
						y: 1.55,
						w: 3,
						h: 0.1,
						backgroundColor: "#FF0000",
					}}
				/>
			</Slide>
		</Presentation>
	);
	return (
		<div>
			<div
				style={{
					width: "100vw",
					height: "50px",
					position: "fixed",
					zIndex: 100,
					backgroundColor: "whitesmoke",
					boxShadow: "0px -2px 6px",
					textAlign: "center",
				}}
			>
				<button
					style={{
						backgroundColor: "green",
						color: "white",
						border: "none",
						borderRadius: "5px",
						height: "30px",
						margin: "10px 5px 5px 5px",
					}}
					onClick={() => {
						ReactPPTX.render(press, { outputType: "blob" }).then(
							(blob) => {
								const a = document.createElement("a");
								const url = URL.createObjectURL(blob);
								a.href = url;
								a.download = "PesertaWisuda.pptx";
								a.click();
								URL.revokeObjectURL(url);
							},
							(e) => {
								alert("Error " + e);
							}
						);
					}}
				>
					Download PPT
				</button>
			</div>
			<Preview
				slideStyle={{ border: "1px solid black" }}
				drawBoundingBoxes={false}
			>
				{press}
			</Preview>
		</div>
	);
};

export default App;
