<script>
	import Head from "../components/containers/Head.svelte";
	import timemap from "../data/timemap";
	import { litteralFormatter } from "../services/dateTimeFormatter";

	import Day from "../components/contents/Day.svelte";
	import Title3 from "../components/headings/Title3.svelte";
	import Calendar from "../components/contents/Calendar.svelte";
	let showCal = true;

	let thisPerson = "riquet";
	let namesList = [];

	const { months } = timemap;
	let isSelected = true;

	const date = new Date();
	const today = litteralFormatter.format(date);

	const mois = today.split(" ")[2];
	const dateNb = today.split(" ")[1];

	let filteredDays = [];
	const title = "Planning version 2";

	if (mois === "août") {
		namesList = [];
	}
	months[7].days.map((day) => {
		const { employees, dayNb, weekday } = day;

		if (dayNb >= dateNb) {
			employees.map(({ employee }) => {
				const { lastname, firstname, other } = employee;
				let completeName = "";
				if (!other) completeName = lastname.toUpperCase();

				if (firstname && firstname.length > 0)
					completeName += ` ${firstname[0].toUpperCase()}`;

				if (
					!namesList.includes(completeName) &&
					completeName.length > 1
				)
					namesList = [...namesList, completeName];
			});
		}

		return namesList;
	});

	namesList.sort();
	console.table(namesList);

	function selectPerson(e) {
		if (filteredDays.length > 0) {
			filteredDays = [];
			console.log(filteredDays.length);
		}
		if (thisPerson.length > 0) {
			thisPerson = "";
			console.log(thisPerson.length);
		}

		console.log(e.target.innerHTML);

		thisPerson = e.target.innerHTML;
		months[7].days.map((day) => {
			const { employees, dayNb, weekday } = day;

			if (dayNb >= dateNb) {
				employees.map(({ employee }) => {
					const { lastname, firstname, other } = employee;
					let completeName = "";
					if (!other) completeName = lastname.toUpperCase();

					if (firstname && firstname.length > 0)
						completeName += ` ${firstname[0].toUpperCase()}`;

					if (completeName === thisPerson)
						filteredDays = [...filteredDays, day];
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

<Head {title} />
<div id="start" />
<Title3 align={"center"}>Aujourd'hui: {today}</Title3>
<div class="container mx-auto">
	{#if showList}
		<div class="btn-sm text-center ">
			{#each namesList as person}
				{#if !person.other}
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
