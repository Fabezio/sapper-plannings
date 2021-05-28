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
	export let month;
	const { monthName, days } = month;
</script>

{@debug monthName}

<svelte:head>
	<title>{monthName}</title>
</svelte:head>

<h1>{monthName}</h1>

<div class="content">
	nombre de jours {days.length}
</div>
