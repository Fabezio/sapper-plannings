<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`timemap/${params.monthName}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { month: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Day from "../../components/contents/Day.svelte";
	import NamesList from "../../components/contents/NamesList.svelte";

	export let month;
	const { monthName, days } = month;

	let thisPerson = "";
	let namesList = [];
	days.map(({ employees }) =>
		employees.map(({ employee }) => {
			const EMPLOYEE = employee.lastname.toUpperCase();
			// lastname = lastname.toUpperCase();
			if (!namesList.includes(EMPLOYEE))
				namesList = [...namesList, EMPLOYEE];
		})
	);
</script>

{@debug monthName}
<a href="timemap">retour au menu</a>

<!-- <svelte:head>
	<title>{monthName}</title>
</svelte:head> -->

<h1>{monthName}</h1>
<NamesList {thisPerson} {namesList} {monthName} />

<div class="content">
	nombre de jours {days.length}
</div>
{#each days as day}
	<!-- {#if }
		
	{/if} -->
	<Day {day} />
{/each}
