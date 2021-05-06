<script>
    import plannings from "../data/plannings.js";
    // import Head from "../components/containers/Head.svelte";
    import Eff from "../components/Eff.svelte";
    const { mai } = plannings;
    const { ADS } = mai;

    const namesList = [];
    function isInList(obj) {
        if (!namesList.includes(obj.nom.toLowerCase()))
            return namesList.push(obj.nom.toLowerCase());
    }
    ADS.map(({ agentJour, agentNuit, chefJour, chefNuit }) => {
        isInList(agentJour);
        isInList(agentNuit);
        isInList(chefJour);
        isInList(chefNuit);
    });
    namesList.sort();
    console.log(namesList);
    //
    const today = new Date().getDate();
    let worker = "";
    console.log(today);
</script>

<!-- <Head title="Planning" /> -->
<!-- <h1>Planning mai</h1> -->
<!-- <input type="text" bind:value={worker} placeholder="entrez le nom de l'agent" />
{#if namesList.includes(worker)}
    <p>{worker}</p>

{/if} -->
{#each ADS as { jour, agentJour, agentNuit, chefJour, chefNuit }}
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
