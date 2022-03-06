<script>
	import Chart from "./Chart.svelte";
	import { faker } from '@faker-js/faker';
	import { Router, Route, Link } from "svelte-routing";
	let page = document.location.hash;

	// data 
	let labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
	let data = labels.map(() => faker.datatype.number({max:100}));
	
	function reloadPage(){
		//location.reload();
		console.log(page)
	}

	function delimiter(value){
		var caller = event.target;
		var NrFormat = new Intl.NumberFormat('en-US', {minimumFractionDigits: 0});
		let delValue = caller.value.replace(/,/g, '');
		value = NrFormat.format(delValue);
		caller.value = value;
	}

	function sParam(value){
		console.log(value);
	}

	window.onpopstate = function(event) {
		page = document.location.hash;
	};

</script>

<div>
	<button on:click={reloadPage}>Reload Page</button>
</div>
	<label for="delimiter">Delimiter</label>
	<input id="delimiter" type="text" on:input={e => delimiter(e.target.value)}><br>
	<label for="sParam">sParam</label>
	<input id="sParam" type="text" on:input={e => sParam(e.target.value)}>

<Chart {data}/>

<style>
	label {
		display: inline;
	}
</style>