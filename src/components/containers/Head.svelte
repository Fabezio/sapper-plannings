<script>
    const mainTitle = "Plannings MCTSP - Arcs de Seine";
    export let title;
    // import { title } from "process";
</script>

<svelte:head>
    <title>Arcs de Seine | {title}</title>
</svelte:head>

<h1>{mainTitle}<br /><br />{title}</h1>

<style>
    h1 {
        margin: 3rem auto 2rem;
        text-align: center;
        text-transform: uppercase;
    }
    @media screen and (max-width: 480px) {
        h1 {
            margin: 1rem auto;
        }
    }
</style>
