<script>
    import Ident from "./Ident.svelte";
    export let chef;
    export let agent;
    export let vac;
</script>

<div class="card">
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
    .card {
        display: flex;
        flex-direction: row;
    }
    .col {
        text-transform: uppercase;
        padding: 0.5rem 16px;
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
    @media screen and (max-width: 790px) {
        .vac {
            padding-left: 0.75rem;
            padding-bottom: 1.75rem;
            align-items: center;
            font-size: 1.25rem;
        }
    }
</style>
