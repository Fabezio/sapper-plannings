<!-- <script context="module">
	export function preload() {
		return this.fetch(`employees.json`)
			.then((e) => e.json())
			.then((employees) => {
				return { employees };
			});
	}
</script>
 -->
<script>
	/* 	export let employees;
	console.log(employees); */

	// import { onMount } from "svelte";
	import timemap from "../data/timemap";
	import {
		litteralFormatter,
		numericFormatter,
	} from "../services/dateTimeFormatter";

	// import MonthName from "./[monthName].svelte";
	// import NamesList from "../components/contents/NamesList.svelte";
	import Day from "../components/contents/Day.svelte";
	import Title3 from "../components/headings/Title3.svelte";
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
	months[numToday - 1].days.map((day) => {
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
		months[numToday - 1].days.map((day) => {
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

<Title3 align={"center"}>Aujourd'hui: {today}</Title3>
{@debug mois}
<!-- {@debug numToday} -->
<div class="buttons">
	{#if showList}
		<div class="d-flex btn-group btn-group-sm text-center ">
			<!-- {@debug monthName} -->
			{#each namesList as person}
				<!-- {@debug person} -->
				<button
					class="btn btn-secondary border-dark mb-1 py-3 px-2"
					on:click={selectPerson}>{person}</button
				>
			{/each}
		</div>
	{:else}
		<div class="d-grid">
			<button
				on:click={() => (showList = !showList)}
				class="btn-lg btn-secondary ">Voir la liste</button
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
	{#each months as { monthName, days }}
		{#if mois === monthName}
			{#each filteredDays as day}
				{#if day.dayNb >= dateNb}
					<Day {day} />
				{/if}
			{/each}
		{/if}
	{/each}
{:else}
	{#each months as { monthName, days }}
		{#if mois === monthName}
			{#each days as day, i}
				<!-- <div class="d-grid content-justify-start"> -->
				{#if day.dayNb >= dateNb}
					<Day {day} />
				{/if}
				<!-- </div> -->
			{/each}
		{/if}
	{/each}
{/if}

<style>
	.buttons {
		min-height: 80px;
	}
</style>
