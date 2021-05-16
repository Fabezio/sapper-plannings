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
        // displayPlanning = true;
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
    // $: worker = worker.toUpperCase();
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

<!-- <div class="flex-filter">
    {#if handleFilter}
        <input
            class="input"
            type="text"
            bind:value={worker}
            placeholder="entre le nom de l'agent"
        />
    {:else}
        <div class="msg">
            tu peux filter les résultats<br /> en cliquant ci-contre
        </div>
    {/if}
    <button class="round" title="filtrer avec mon nom" on:click={toggleFilter}>
        <img src={filter} alt="filtre" width="24" height="24" />
    </button>
</div> -->

{#if namesList.includes(worker)}
    <Workers arr={adsFilter} />
{/if}
{#if adsFilter.length === 0}
    <Workers arr={ADS} />
{/if}

<style>
    .round {
        border-radius: 50%;
        padding: 0;
        width: 48px;
        height: 48px;
        border: none;
        opacity: 0.75;
    }
    .round:hover {
        opacity: 1;
    }
    .msg,
    input {
        margin-right: 1rem;
        /* transform: rotateY(180deg); */
        transition-duration: 250ms;
        /* transform: fade */
    }
    .msg {
        /* transition-duration: 250ms; */
        align-self: center;
    }
    input {
        transition-duration: 250ms;
        border: 1px solid rgba(0, 0, 0, 0.25);
        padding: 8px 8px;
        border-radius: 4px;
        margin-right: 1rem;
    }
    .flex-filter {
        display: flex;
        justify-content: flex-end;
    }

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
