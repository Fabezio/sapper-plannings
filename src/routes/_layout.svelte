<script>
	import Head from "../components/containers/Head.svelte";
	import Nav from "../components/containers/Nav.svelte";
	import Footer from "../components/containers/Footer.svelte";
	// import { url } from "inspector";
	const links = [
		{ url: undefined, label: "Planning Synthétique", visible: true },
		{ url: "calendar", label: "Calendrier", visible: false },
		{ url: "about", label: "About", visible: false },
		{ url: "blog", label: "Blog", visible: false, prefetch: true },
		{ url: "home", label: "Accueil", visible: false, prefetch: true },
		{
			url: "workers",
			label: "Plannings Individuels",
			visible: true,
			prefetch: false,
		},
	];

	export let segment;
</script>

<Nav {segment} {links} />
{#each links as { url, label }}
	{#if url === segment}
		<Head title={label || "ajoute un titre"} />
	{/if}
{/each}
<!-- <svelte:component  /> -->

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		position: relative;
		/* max-width: 56em; */
		min-height: 47vh;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	@media screen and (max-width: 480px) {
		main {
			padding: 1rem;
		}
	}
</style>
