import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
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
			text: 'Số lượng người đăng ký 7 ngày gần nhất',
		},
	},
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Người đăng ký',
			data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
			borderColor: '#97C7EF',
			backgroundColor: '#97C7EF',
		},
	],
};

function SubPage() {
	return <Line options={options} data={data} />;
}

export default SubPage