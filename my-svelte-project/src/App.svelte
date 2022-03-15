<script>
	import Chart from "./Chart.svelte";
	import { data } from './stores.js';
	import { query } from 'svelte-pathfinder';
	

	// just a reload
	function reloadPage(){
		location.reload();
	};

	//formatting input value for id=delimiter and change data 0 index value
	function delimiter(value){
		//format input
		var caller = event.target;
		var NrFormat = new Intl.NumberFormat('en-US', {minimumFractionDigits: 0});
		let delValue = caller.value.replace(/,/g, '');
		value = NrFormat.format(delValue);
		caller.value = value;
		
		//pass cleaned to data first index
		$data[0] = delValue;
		//pass cleaned data to search param
		$query.params.q = delValue;		
	};


</script>

<div>
	<button on:click={reloadPage}>Reload Page</button>
</div>
	<label for="delimiter">Delimiter</label>
	<!--  bind to url param rst index to input, then call delmiter -->
	<input id="delimiter" type="text" on:input={e => delimiter(e.target.value)}><br>

<Chart />

<style>
	label {
		display: inline;
	}
</style>