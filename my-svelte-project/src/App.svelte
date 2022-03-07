<script>
	import Chart from "./Chart.svelte";
	import { faker } from '@faker-js/faker';
	import { Router, Route, Link, } from "svelte-navigator";
	import { onMount, onDestroy } from 'svelte';
	import { globalHistory } from 'svelte-routing/src/history';
	
	// data 
	let labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
	let data = labels.map(() => faker.datatype.number({max:100}));
	

	//get url (path, query, hash)
	let pathname = window.location.pathname;
    let unsub;

    onMount(() => {
        unsub = globalHistory.listen(({ location, action }) => {
            //console.log(location, action);
            pathname = location.pathname;
        });
    });

    onDestroy(() => {
        unsub();
    });

	// just a reload
	function reloadPage(){
		location.reload();
	}

	// formatting input value id=delmiiter
	function delimiter(value){
		var caller = event.target;
		var NrFormat = new Intl.NumberFormat('en-US', {minimumFractionDigits: 0});
		let delValue = caller.value.replace(/,/g, '');
		value = NrFormat.format(delValue);
		caller.value = value;
		
	}

	// read router
	function sParam(value){
		console.log(location.host, location.pathname)
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
	<input id="delimiter" bind:value={data[0]} type="text" on:input={e => delimiter(e.target.value)}><br>
	<label for="sParam">sParam</label>
	<input id="sParam" type="text" on:input={e => sParam(e.target.value)}>

<Chart {data}/>

<style>
	label {
		display: inline;
	}
</style>