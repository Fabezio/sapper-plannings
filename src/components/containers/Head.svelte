<script>
    const mainTitle = "Plannings MCTSP - Arcs de Seine";
    export let title;
    // import { title } from "process";
</script>

<svelte:head>
    <title>Arcs de Seine | {title}</title>
</svelte:head>

<h1>{mainTitle}<br /><br />
    <span class="subtitle">

        {title}
    </span>
</h1>

<style>
    h1 {
        margin: 3rem auto 2rem;
        text-align: center;
        text-transform: uppercase;
        font-weight:400;
    }
    .subtitle {

        
        text-transform: capitalize;
        font-variant:small-caps;
    }
    @media screen and (max-width: 480px) {
        h1 {
            margin: 1rem auto;
            font-size: 1.25rem;
        }
    }
</style>
