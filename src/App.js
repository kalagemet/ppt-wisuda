import * as ReactPPTX from "react-pptx";
import Preview from "react-pptx/preview";
import { Presentation, Shape, Slide, Text, Image } from "react-pptx";

const IDENTITAS_TARUNA = [
	"Nama",
	"NIT",
	"Tempat, Tgl Lahir",
	"Email",
	"Jenis Kelamin",
	"Nama Orang Tua",
	"Asal",
	"IPK Akademik",
	"Predikat",
	"Nilai Pengasuhan",
	"Judul Tugas Akhir",
];

const TARUNA = [
	[
		"Karin puji rahma yulia santoso",
		"20DI7016",
		"Bandung, 15 Juli 2002",
		"karinyulia1507@gmail.com",
		"Perempuan",
		"Ridwan Santoso",
		"Banten",
		"",
		"",
		"",
		"Pengukuran dan pemetaan bidang-bidang tanah di dusun ngemplak desa pagerharjo kec. Samigaluh",
	],
	[
		"Puji yulia santoso",
		"20DI7016",
		"Bandung, 15 Juli 2002",
		"karinyulia1507@gmail.com",
		"Perempuan",
		"Ridwan Santoso",
		"Banten",
		"",
		"",
		"",
		"Pengukuran dan pemetaan bidang-bidang tanah di dusun ngemplak desa pagerharjo kec. Samigaluh",
	],
];

const App = () => {
	const press = (
		<Presentation layout="16x10">
			{TARUNA.map((d, i) => {
				return (
					<Slide
						key={i}
						style={{
							backgroundImage: {
								kind: "path",
								path: "http://localhost:3000/bg.jpeg",
							},
						}}
					>
						<Image
							src={{ kind: "path", path: "http://localhost:3000/logo192.png" }}
							style={{
								x: 0.4,
								y: 0.2,
								w: 0.6,
								h: 0.6,
							}}
						/>
						<Image
							src={{ kind: "path", path: "http://localhost:3000/logoAtr.png" }}
							style={{
								x: 9,
								y: 0.2,
								w: 0.6,
								h: 0.6,
							}}
						/>
						<Text
							style={{
								x: 0,
								y: 0.2,
								w: "100%",
								h: 0.5,
								bold: true,
								fontSize: 24,
								align: "center",
							}}
						>
							Sekolah Tinggi Pertanahan Nasional
						</Text>
						<Shape
							type="rect"
							style={{
								borderColor: "#ac4d19",
								x: 3.5,
								y: 0.7,
								w: 3,
								h: 0.1,
								backgroundColor: "#ac4d19",
							}}
						/>

						{/* foto taruna */}
						<Image
							src={{
								kind: "path",
								path: "http://localhost:3000/img/" + d[1] + ".jpeg",
							}}
							style={{
								x: 0.9,
								y: 1.2,
								w: 2,
								h: 3,
							}}
						/>
						<Shape
							type="rect"
							style={{
								borderColor: "#ac4d19",
								x: 1.1,
								y: 4.5,
								w: 1.5,
								h: 0.1,
								backgroundColor: "#ac4d19",
								//1628b6
								// FF0000
							}}
						/>

						{/* identitas taruna */}
						{IDENTITAS_TARUNA.map((data, i) => {
							return (
								<Text
									key={i}
									style={{
										x: 3.4,
										y: 1.3 + 0.29 * i,
										w: 3,
										h: 0.5,
										fontSize: 16,
										align: "left",
									}}
								>
									{data}
								</Text>
							);
						})}
						{IDENTITAS_TARUNA.map((data, i) => {
							return (
								<Text
									key={i}
									style={{
										x: 5.3,
										y: 1.3 + 0.29 * i,
										w: 3,
										h: 0.5,
										fontSize: 16,
										align: "left",
									}}
								>
									:
								</Text>
							);
						})}
						{d.map((data, i) => {
							let row = data.length > 27 ? (data.length - 27) / 3 : 0;
							if (i === d.length - 1) {
								row = data.length > 90 ? (data.length - 90) / 25 : 0;
							}
							return (
								<Text
									key={i}
									style={{
										bold: i === 0,
										underline: i === 0,
										x: 5.4,
										y: 1.3 + 0.29 * i,
										w: 4,
										h: 0.5,
										fontSize: 16 - row,
										align: "left",
									}}
								>
									{i === 0 ? data.toUpperCase() : data}
								</Text>
							);
						})}

						{/* footer */}
						<Shape
							type="round2SameRect"
							style={{
								borderColor: "#b08e0a",
								backgroundColor: "#b08e0a",
								w: 6,
								h: 0.688,
								y: "89%",
								x: 2,
							}}
						/>
						<Text
							style={{
								color: "white",
								fontSize: 14,
								bold: true,
								w: "100%",
								h: 0.3,
								y: 5.6,
								align: "center",
							}}
						>
							Wisuda IXXXX Sekolah Tinggi Petahanan Nasional
						</Text>
						<Text
							style={{
								color: "white",
								fontSize: 14,
								bold: true,
								w: "100%",
								h: 0.3,
								y: 5.85,
								verticalAlign: "bottom",
								align: "center",
							}}
						>
							Yogyakarta, 12 Januari 2021
						</Text>
					</Slide>
				);
			})}
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
			<div style={{ paddingTop: "49px" }}>
				<Preview
					slideStyle={{ border: "1px solid black" }}
					drawBoundingBoxes={false}
				>
					{press}
				</Preview>
			</div>
		</div>
	);
};

export default App;
