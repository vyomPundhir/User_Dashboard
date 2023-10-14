import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";

import processAndExportData from "../utils/chartDataExtractor.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function BarChart() {
	const [labelsArr, setLabelsArr] = useState([]);
	const [dataArrMale, setDataArrMale] = useState([]);
	const [dataArrFemale, setDataArrFemale] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const { sortedBarGraph } = await processAndExportData();

			const labels = [];
			const dataMale = [];
			const dataFemale = [];

			for (const key in sortedBarGraph.male) {
				if (Object.hasOwnProperty.call(sortedBarGraph.male, key)) {
					labels.push(key);
					dataMale.push(sortedBarGraph.male[key]);
				}
			}

			for (const key in sortedBarGraph.female) {
				if (Object.hasOwnProperty.call(sortedBarGraph.female, key)) {
					dataFemale.push(sortedBarGraph.female[key]);
				}
			}

			setLabelsArr(labels);
			setDataArrMale(dataMale);
			setDataArrFemale(dataFemale);
			setIsLoading(false);
		}

		fetchData();
	}, []);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
			title: {
				display: false,
				text: "Chart.js Bar Chart",
			},
		},
	};

	const data = {
		labels: labelsArr,
		datasets: [
			{
				label: "Male",
				// data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				data: dataArrMale,
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Female",
				// data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				data: dataArrFemale,
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return (
		<div className="flex justify-center items-center mt-[80px] w-[700px] h-[100px]">
			<div className="w-[800px]">
				{isLoading ? (
					<p className="text-4xl text-red-400  text-center">
						Loading Data, Please Wait...
					</p>
				) : (
					<Bar options={options} data={data} className="pb-[20px]" />
				)}
			</div>
		</div>
	);
}