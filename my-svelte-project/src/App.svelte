<script>
	import Chart from "./Chart.svelte";
	import { data } from './stores.js';
	import { query } from 'svelte-pathfinder';

	// just a reload
	function reloadPage(){
		location.reload();
	}

	//formatting input value for id=delimiter and change data 0 index value
	function delimiter(value){
		$data[0] = value;
		var caller = event.target;
		var NrFormat = new Intl.NumberFormat('en-US', {minimumFractionDigits: 0});
		let delValue = caller.value.replace(/,/g, '');
		value = NrFormat.format(delValue);
		caller.value = value;
		
	}

	// windows change get url
	window.onpopstate = function(event) {
		page = document.location.hash;
	};

</script>

<div>
	<button on:click={reloadPage}>Reload Page</button>
</div>
	<label for="delimiter">Delimiter</label>
	<!--  bind to url param rst index to input, then call delmiter -->
	<input id="delimiter" type="text" bind:value={$query.params.q} on:input={e => delimiter(e.target.value)}><br>

<Chart />

<style>
	label {
		display: inline;
	}
</style>