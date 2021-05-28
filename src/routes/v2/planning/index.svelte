<!--

-->
	<script context="module">
		export function preload() {
			return this.fetch(`v2/planning.json`).then(r => r.json()).then((mois) => {
				//const {mois} =planning
				return { mois };
			});
		}
	</script>
	<script>
		export let mois
		const title = "planning version 2"
		console.log(typeof mois)
	</script>
<h2 class="text-uppercase mb-3">

	{title}
</h2>

{@debug mois}
{#each mois as {nom, jours}} 
{#if jours}
<a href="v2/planning/{nom}" rel="prefetch" class="btn mr-2 btn-outline-success text-uppercase" title="nombre de jours: {jours.length}">
	{nom}
</a>
{/if}
{/each}
<!--
-->
