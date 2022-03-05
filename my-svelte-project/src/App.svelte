<script>
	import Chart from "./Chart.svelte";
	import { faker } from '@faker-js/faker';

	// data 
	let labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
	let data = labels.map(() => faker.datatype.number({max:100}));
	
	
	function reloadPage(){
		location.reload();
}

</script>

<div>
	<button on:click={reloadPage}>Reload Page</button>
</div>


<input type="number" bind:value={data[0]}>

<Chart {data}/>