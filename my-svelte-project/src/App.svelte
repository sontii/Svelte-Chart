<script>
	import Chart from "./Chart.svelte";
	import { data } from './stores.js';
	import { query } from 'svelte-pathfinder';
	import { onMount } from 'svelte';
	

	// just a reload
	function reloadPage(){
		location.reload();
	};

	function delimiter(e){
		//format input
		var NrFormat = new Intl.NumberFormat('en-US', {minimumFractionDigits: 0});
		e = NrFormat.format(e);
		return e;
	};


	//formatting input value and change data 0 index value
	function formatBox(e){
		//format input
		var cleanValue = e.target.value.replace(/,/g, '');
		if (!isNaN(cleanValue)){
			e.target.value = delimiter(cleanValue);
		
			//pass cleaned to data first index
			$data[0] = cleanValue;

			//pass cleaned data to search param
			$query.params.q = cleanValue;
		} else {
			//delete NaN character
			alert('only numbers');
      		const replacedValue = e.target.value.slice(0, -1);
      		e.target.value = replacedValue;
		}
				
	};
	onMount(() => {
		//query param to input. Zero if NaN or empty
		if(!isNaN($query.params.q)){
			window.document.getElementById('chartBox').value = delimiter($query.params.q);
		} else {
			window.document.getElementById('chartBox').value = 0;
		}
		
	});
</script>

<div>
	<button on:click={reloadPage}>Reload Page</button>
</div>
	<label for="chartBox">Delimiter</label>
	<!--  bind to url param rst index to input, then call delmiter -->
	<input id="chartBox" type="text" on:input={e => formatBox(e)}><br>

<Chart />

<style>
	label {
		display: inline;
	}
</style>