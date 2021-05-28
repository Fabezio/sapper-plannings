<!--

-->
<script context="module">
	export function preload() {
		return this.fetch(`v2/planning.json`)
			.then((r) => r.json())
			.then((months) => {
				//const {mois} =planning
				return { months };
			});
	}
</script>

<script>
	export let months;
	const title = "planning version 2";
	console.log(typeof months);
</script>

<h2 class="text-uppercase mb-3">
	{title}
</h2>

{@debug months}
{#each months as { monthName, days }}
	{#if days}
		<a
			href="v2/planning/{monthName}"
			rel="prefetch"
			class="btn mr-2 btn-outline-success text-uppercase"
			title="nombre de jours: {days.length}"
		>
			{monthName}
		</a>
	{/if}
{/each}
<!--
-->
