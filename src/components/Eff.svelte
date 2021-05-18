<script>
    import Ident from "./Ident.svelte";
    export let chef;
    export let agent;
    export let vac;
</script>

<div class="card">
    <div class="vac">{vac}</div>
    <div class="box">
        <div class="bold">
            <Ident id={chef} />
        </div>
        <!-- , {chef.prenom} -->
        <div>
            <Ident id={agent} />
        </div>
    </div>
</div>

<!-- <div class="box">
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
        justify-content: center;
        text-align: left;
    }
    .box {
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
            display: none;
            /* padding-left: 0.75rem; */
            padding-bottom: 1.75rem;
            align-items: center;
            font-size: 1.25rem;
        }
        .box {min-width: 6rem; padding :8px 0;}
    }
</style>
