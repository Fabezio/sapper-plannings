<script>
	import Nav from "../components/containers/Nav.svelte";
	import Footer from "../components/containers/Footer.svelte";

	export let segment;
</script>

<Nav {segment} />

<main>
	<slot />
</main>

<Footer />

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
