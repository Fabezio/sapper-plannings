<!-- <script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`v2/planning/${params.monthName}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { month: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let month;
	const { monthName } = month;
</script>

{@debug monthName}

<!-- 
<svelte:head>
	<title>{month.monthName}</title>
</svelte:head>

<h1>{month.monthName}</h1>

<div class="content">
	{month.days.length}
</div> -->
