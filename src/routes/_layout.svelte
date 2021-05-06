<script>
	import Nav from "../components/containers/Nav.svelte";

	export let segment;
</script>

<Nav {segment} />
<svelte:head>
	<title>Plannings Arcs de Seine</title></svelte:head
>
<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		/* max-width: 56em; */
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
