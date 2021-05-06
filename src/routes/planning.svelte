<script>
    import plannings from "../data/plannings.js";
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

<h1>Planning mai</h1>
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

            <Eff vac="🌞" chef={chefJour} agent={agentJour} />
            <Eff vac="🌜" chef={chefNuit} agent={agentNuit} />
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
    h1 {
        text-transform: uppercase;
    }
</style>
