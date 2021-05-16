<script>
    import { mai, ADS, namesList } from "../services/workers.js";
    import filter from "../../static/filter.png";
    import Workers from "../components/Workers.svelte";

    let adsFilter = [];
    let handleFilter = false;
    function toggleFilter() {
        return (handleFilter = !handleFilter);
    }
    function selectEmployee(e) {
        console.log(e.target.innerText);
        worker = worker.toUpperCase();
        console.log(worker);
        worker = e.target.innerText;
        return worker;
    }

    function displayFilteredList() {
        ADS.map((obj) => {
            if (
                worker === obj.chefJour.nom.toUpperCase() ||
                worker === obj.chefNuit.nom.toUpperCase() ||
                worker === obj.agentJour.nom.toUpperCase() ||
                worker === obj.agentNuit.nom.toUpperCase()
            ) {
                adsFilter = [...adsFilter, obj];
                console.log(obj);
            }
        });

        return adsFilter;
    }
    $: if (!handleFilter || worker === "") adsFilter = [];

    const today = new Date().getDate();
    let worker = "";

    $: if (namesList.includes(worker)) displayFilteredList();
</script>

<h2>Mois actuel: {mai.month}</h2>
<div class="list">
    {#each namesList as thisname}
        <div class="el">
            <button on:click={selectEmployee}>
                {thisname}
            </button>
        </div>
    {/each}
</div>

{#if namesList.includes(worker)}
    <Workers arr={adsFilter} />
{/if}
{#if adsFilter.length === 0}
    <Workers arr={ADS} />
{/if}

<style>
    @media screen and (max-width: 480px) {
        h2 {
            /* text-align: center; */
            margin: 1rem auto;
        }
    }
    h2 {
        text-align: center;
        margin: 2rem auto;
    }
    button {
        min-width: 7rem;
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        padding: 4px;
        font-size: 1rem;
        margin: 1px;
    }

    .list {
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
