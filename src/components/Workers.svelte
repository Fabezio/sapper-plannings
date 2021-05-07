<script>
    import Eff from "./Eff.svelte";
    export let arr;
    const today = new Date().getDate();
</script>

{#each arr as { jour, agentJour, agentNuit, chefJour, chefNuit }}
    {#if jour >= today}
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
    @media screen and (max-width: 480px) {
        .boxes {
            flex-direction: column;
        }
        .flex {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
    }
</style>
