<script context="module">
	export function preload() {
		return this.fetch(`timemap.json`)
			.then((r) => r.json())
			.then((months) => {
				//const {mois} =timemap
				return { months };
			});
	}
</script>

<script>
	// import MonthsNav from "../components/containers/MonthsNav.svelte";
	export let months;
	export let segment;
	const title = "Planning version 2";
	console.log(typeof months);
</script>

{@debug segment}
<h2 class="text-uppercase mb-3">
	{title}
</h2>
<!-- <MonthsNav {months} /> -->

<!-- {@debug segment} -->
<!-- 
{#each months as { monthName, days }}
	{#if days}
		<a
			href="timemap/{monthName}"
			rel="prefetch"
			class="btn mr-2 btn-outline-success text-uppercase"
			title="nombre de jours: {days.length}"
		>
			{monthName}
		</a>
	{/if}
{/each} -->
