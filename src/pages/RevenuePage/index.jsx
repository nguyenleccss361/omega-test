import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Doanh thu tháng',
		},
	},
};

const labels = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Doanh thu',
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000000 })),
			borderColor: '#97C7EF',
			backgroundColor: '#97C7EF',
		},
	],
};

function RevenuePage() {
	return <Bar options={options} data={data} />;
}

export default RevenuePage