<canvas id="myChart" width="2" height="1"></canvas>


<script>
import { faker } from '@faker-js/faker';
import { afterUpdate } from 'svelte';


export let labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
export let data = labels.map(() => faker.datatype.number({max:100}));
console.log(data)
var ctx;
var myChart;


function createChart () {
	ctx = document.getElementById('myChart').getContext('2d');
	if (myChart) myChart.destroy();
	myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels,
			datasets: [{
				label: '# of Votes',
				data,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
}

afterUpdate(createChart)
</script>