<script>
	import timemap from "../data/timemap";
	import { litteralFormatter } from "../services/dateTimeFormatter";
	// import MonthName from "./[monthName].svelte";
	import NamesList from "../components/contents/NamesList.svelte";
	import Day from "../components/contents/Day.svelte";
	import Title3 from "../components/headings/Title3.svelte";
	// import { type } from "os";
	let thisPerson = "";
	let namesList = [];
	let monthName = "";
	// export let timemap;
	const { months } = timemap;
	// let { monthName } = months;
	const date = new Date();
	const today = litteralFormatter.format(date);
	const mois = today.split(" ")[2];
	const dateNb = today.split(" ")[1];

	// let monthName = "";
	const title = "Planning version 2";
	console.log(typeof months);
	// function selectPerson(e) {
	// 	return console.log(e.target);
	// }
	console.log(typeof dateNb);
</script>

<!-- <h2 class="text-uppercase mb-3">
    {title}
</h2> -->
<!-- svelte-ignore missing-declaration -->
<Title3 align={"center"}>Aujourd'hui: {today}</Title3>
{@debug mois}
<!-- <MonthsNav {months} /> -->

<!-- {@debug segment} -->
<!-- <div class="container text-center">
    <div class="btn-group mb-4">
        {#each months as { monthName, days }}
            {@debug monthName}
            {#if days}
                <a
                    href="timemap/{monthName}"
                    rel="prefetch"
                    class="btn mr-2 btn-outline-success text-uppercase {mois ===
                        monthName && 'active'}"
                    title="nombre de jours: {days.length}"
                >
                    {monthName}
                </a>
            {/if}
        {/each}
    </div>
</div> -->
<!-- <NamesList {thisPerson} monthName={months[5]} {namesList} /> -->
<!-- <NamesList on:select={selectPerson} monthName={months[5]} {namesList} /> -->

<p>agent sélectionné: {thisPerson.length > 0 ? thisPerson : "en attente"}</p>
<br />

{#each months as { monthName, days }}
	{#if mois === monthName}
		{#each days as day, i}
			{#if day.dayNb >= dateNb}
				<Day {day} {i} />
			{/if}
		{/each}
	{/if}
{/each}
