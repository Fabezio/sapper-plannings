<script>
    import Ident from "./Ident.svelte";
    export let chef;
    export let agent;
    export let vac;
</script>

<div class="vac">{vac}</div>
<div class="col">
    <div class="bold">
        <Ident id={chef} />
    </div>
    <!-- , {chef.prenom} -->
    <div>
        <Ident id={agent} />
    </div>
</div>

<!-- <div class="col">
    <div class="bold">
        {nameDisplay(chefNuit)}
    </div>
    <div>
        {nameDisplay(agentNuit)}
    </div>
</div> -->
<style>
    .col {
        text-transform: uppercase;
        padding: 1rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        min-width: 200px;
    }
    .bold {
        font-weight: bold;
    }
    .vac {
        font-size: 1.75rem;
        display: flex;
        align-items: flex-start;
        padding-left: 0.75rem;
        padding-top: 0.75rem;
    }
</style>
