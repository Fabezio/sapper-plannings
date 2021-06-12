<script>
	// import { onMount } from "svelte";

	import timemap from "../data/timemap";
	import { litteralFormatter } from "../services/dateTimeFormatter";
	// import MonthName from "./[monthName].svelte";
	// import NamesList from "../components/contents/NamesList.svelte";
	import Day from "../components/contents/Day.svelte";
	import Title3 from "../components/headings/Title3.svelte";

	let thisPerson = "";
	let namesList = [];

	let monthName = "";

	const { months } = timemap;
	let isSelected = false;

	const date = new Date();
	const today = litteralFormatter.format(date);
	const mois = today.split(" ")[2];
	const dateNb = today.split(" ")[1];

	let filteredDays = [];
	const title = "Planning version 2";

	if (mois === "juin") {
		// console.log("yes");
		namesList = [];
	}
	months[5].days.map((day) => {
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
		// console.log(filteredDays.length, thisPerson.length);
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
		months[5].days.map((day) => {
			const { employees, dayNb, weekday } = day;

			if (dayNb >= dateNb) {
				employees.map(({ employee }) => {
					const { lastname, firstname } = employee;
					const LASTNAME = lastname.toUpperCase();

					if (thisPerson == LASTNAME) {
						filteredDays = [...filteredDays, day];
					}
				});
			}
		});

		console.log(filteredDays);
		return filteredDays;
	}

	$: if (thisPerson.length > 0) {
		thisPerson = thisPerson;
		isSelected = true;
	} else {
		isSelected = false;
	}
</script>

<Title3 align={"center"}>Aujourd'hui: {today}</Title3>
{@debug mois}

<div class="d-flex flex-wrap justify-content-start my-3">
	<!-- {@debug monthName} -->
	{#each namesList as person}
		<!-- {@debug person} -->
		<button
			class="btn btn-sm btn-outline-primary me-1 mb-1"
			on:click={selectPerson}>{person}</button
		>
	{/each}
	<p>{thisPerson}</p>
</div>
<br />
<!-- planning -->
{#if thisPerson.length > 0}
	{#each months as { monthName, days }}
		{#if mois === monthName}
			{#each filteredDays as day, i}
				{#if day.dayNb >= dateNb}
					<Day {day} {i} />
				{/if}
			{/each}
		{/if}
	{/each}
{:else}
	{#each months as { monthName, days }}
		{#if mois === monthName}
			{#each days as day, i}
				{#if day.dayNb >= dateNb}
					<Day {day} {i} />
				{/if}
			{/each}
		{/if}
	{/each}
{/if}
