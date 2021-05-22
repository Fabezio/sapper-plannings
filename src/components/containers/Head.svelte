<script>
    const mainTitle = "Plannings MCTSP - Arcs de Seine";
    export let title;
    // import { title } from "process";
</script>

<svelte:head>
    <title>Arcs de Seine | {title}</title>
</svelte:head>
<div class="text-center text-uppercase">
    <h1 class="display-3 mb-3">
        {mainTitle}
    </h1>
    <h2 class="display-4 ">
        {title}
    </h2>
</div>

<style>
    @media screen and (max-width: 480px) {
        h1 {
            margin: 1rem auto;
            font-size: 1.25rem;
        }
    }
</style>
