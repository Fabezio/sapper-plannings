<script>
	// import { fade } from "svelte/transition";
	import timemap from "../data/timemap";
	import {
		litteralFormatter,
		numericFormatter,
	} from "../services/dateTimeFormatter";

	import Day from "../components/contents/Day.svelte";
	import Title3 from "../components/headings/Title3.svelte";
	import Calendar from "../components/contents/Calendar.svelte";
	let showCal = true;
	// connexion();
	let thisPerson = "";
	let namesList = [];

	let monthName = "";

	const { months } = timemap;
	let isSelected = false;

	const date = new Date();
	const today = litteralFormatter.format(date);
	const numToday = parseInt(numericFormatter.format(date).split("/")[1]);
	const mois = today.split(" ")[2];
	const dateNb = today.split(" ")[1];

	let filteredDays = [];
	const title = "Planning version 2";
	let monthNumber;
	if (mois === "juillet") {
		// console.log("yes");
		namesList = [];
	}
	months[6].days.map((day) => {
		const { employees, dayNb, weekday } = day;

		if (dayNb >= dateNb) {
			employees.map(({ employee }) => {
				const { lastname, firstname } = employee;
				const LASTNAME = lastname.toUpperCase();

				if (!namesList.includes(LASTNAME)) {
					namesList = [...namesList, LASTNAME];
				}
			});
		}
	});

	namesList.sort();

	function selectPerson(e) {
		if (filteredDays.length > 0) {
			filteredDays = [];
			console.log(filteredDays.length);
		}
		if (thisPerson.length > 0) {
			thisPerson = "";
			console.log(thisPerson.length);
		}
		// filteredDays = [];
		console.log(e.target.innerHTML);
		// filteredDays = []
		thisPerson = e.target.innerHTML;
		months[6].days.map((day) => {
			const { employees, dayNb, weekday } = day;

			if (dayNb >= dateNb) {
				employees.map(({ employee }) => {
					const { lastname, firstname, other } = employee;
					const LASTNAME = lastname.toUpperCase();
					if (thisPerson == LASTNAME) {
						console.log(LASTNAME);
						filteredDays = [...filteredDays, day];
					}
				});
			}
		});
		showList = false;
		console.log(filteredDays);
		return filteredDays;
	}

	$: if (thisPerson.length > 0) {
		thisPerson = thisPerson;
		isSelected = true;
	} else {
		isSelected = false;
	}
	let showList = true;
	$: if (showList) {
		filteredDays = [];
		thisPerson = "";
	}
</script>

<div id="start" />
<Title3 align={"center"}>Aujourd'hui: {today}</Title3>
<div class="container mx-auto">
	{#if showList}
		<div class="btn-sm text-center ">
			<!-- {@debug monthName} -->
			{#each namesList as person}
				{#if person !== "INCONNU"}
					<!-- {@debug person} -->
					<button
						class="btn btn-secondary border-dark me-1 mb-1 "
						on:click={selectPerson}>{person}</button
					>
				{/if}
			{/each}
		</div>
	{:else}
		<div class="d-flex btn-group btn-group-lg rounded rounded-pill">
			<button
				on:click={() => (showList = !showList)}
				class="btn btn-secondary border-right-dark "
				>Voir la liste</button
			>
			<button
				on:click={() => (showCal = !showCal)}
				class="btn btn-primary ">Changer vue</button
			>
		</div>
	{/if}
</div>

<br />

<!-- planning -->
<Title3 align="center"
	>{thisPerson.length > 0
		? `Planning de ${thisPerson}`
		: "Planning général"}</Title3
>
<br />
{#if thisPerson.length > 0}
	{#if showCal}
		<Calendar list={filteredDays} />
	{:else}
		{#each months as { monthName, days }}
			{#if mois === monthName}
				{#each filteredDays as day}
					{#if day.dayNb >= dateNb}
						<Day {day} />
					{/if}
				{/each}
			{/if}
		{/each}
		<div
			class="container mx-auto d-flex btn-group btn-group-lg rounded rounded-pill mt-4"
		>
			<button
				on:click={() => (showList = !showList)}
				class="btn btn-secondary border-right-dark "
				>Voir la liste</button
			>
			<button
				on:click={() => (showCal = !showCal)}
				class="btn btn-primary ">Changer vue</button
			>
			<a class="btn btn-outline-success" href="#start">retour au début</a>
		</div>
	{/if}
{:else}
	{#each months as { monthName, days }}
		{#if mois === monthName}
			{#each days as day}
				{#if day.dayNb >= dateNb}
					<Day {day} />
				{/if}
			{/each}
		{/if}
	{/each}
	<!-- <div
		class="container mx-auto d-flex btn-group btn-group-lg rounded rounded-pill mt-4"
	>
	<button
	on:click={() => (showList = !showList)}
	class="btn btn-secondary border-right-dark ">Voir la liste</button
	>
	
</div> -->

	<button
		class="container mx-auto d-grid text-center btn-lg bg-white btn-outline-success rounded  mt-4"
	>
		<a class="text-center mx-auto bg-light no-decoration" href="#start"
			>retour au début
		</a></button
	>
{/if}

<style>
	.no-decoration {
		text-decoration: none;
	}
</style>
