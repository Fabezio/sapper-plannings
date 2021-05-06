<script>
    export let title;
    // import { title } from "process";
</script>

<svelte:head>
    <title>Arcs de Seine | {title}</title>
</svelte:head>
<h1>{title}</h1>

<style>
    h1 {
        margin: 2rem auto 4rem;
        text-align: center;
        text-transform: uppercase;
    }
</style>
