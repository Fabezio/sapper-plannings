<script>
    import Eff from "./Eff.svelte";
    export let arr;
    const today = new Date().getDate();
    let seeAll = false;
    function dispatchAll() {
        return (seeAll = !seeAll);
    }
</script>

<div class="right">
    <button class="" on:click={dispatchAll}
        >voir {seeAll ? "3 premiers" : "tout"}</button
    >
</div>

{#each arr as { jour, agentJour, agentNuit, chefJour, chefNuit }}
    {#if seeAll}
        <div class="flex">
            <div class="nb">
                {jour}
            </div>

            <div class="boxes">
                <Eff vac="🌞" chef={chefJour} agent={agentJour} />
                <Eff vac="🌜" chef={chefNuit} agent={agentNuit} />
            </div>
        </div>
    {:else if jour >= today && jour < today + 3}
        <div class="flex">
            <div class="nb">
                {jour}
            </div>

            <div class="boxes">
                <Eff vac="🌞" chef={chefJour} agent={agentJour} />
                <Eff vac="🌜" chef={chefNuit} agent={agentNuit} />
            </div>
        </div>
    {/if}
{/each}

<style>
    .flex {
        display: flex;
        padding: 1rem;
        justify-content: center;
    }

    .nb {
        padding: 1rem;
    }
    .boxes {
        display: flex;
        flex-direction: row;
    }
    button {
        z-index: 1;
    }
    @media screen and (max-width: 480px) {
        .boxes {
            flex-direction: column;
        }
        .flex {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
    }
    .right {
        margin: 1rem 0;
        display: flex;
        justify-content: flex-end;
        /* text-align: right; */
        /* vertical-align: top; */
    }
    button {
        text-transform: uppercase;
    }
</style>
