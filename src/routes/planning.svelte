<script>
    import { mai, ADS, namesList } from "../services/workers.js";
    import filter from "../../static/filter.png";
    import Workers from "../components/Workers.svelte";
    let displayPlanning = true;
    let adsFilter = [];
    let handleFilter = false;
    function toggleFilter() {
        return (handleFilter = !handleFilter);
    }
    function selectEmployee(e) {
        displayPlanning = true;
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
                // console.log(obj);
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
{#if !displayPlanning}
    <h2>Agents disponibles</h2>
    <div class="list">
        {#each namesList as thisname}
            <div class="el">
                <button on:click={selectEmployee}>
                    {thisname}
                </button>
            </div>
        {/each}
    </div>
{:else}
    <button
        class="float-right close"
        title="fermer"
        on:click={() => (displayPlanning = false)}>&times;</button
    >
    {#if namesList.includes(worker)}
        <Workers {worker} arr={adsFilter} />
        <!-- {:else if adsFilter.length === 0} -->
    {/if}
    {#if adsFilter.length === 0}
        <Workers {worker} arr={ADS} />
    {/if}
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
    .close {
        margin-right: 2rem;
        border: none;
        background: white;
        font-weight: bold;
        font-size: 1.5rem;
    }
    /* .close:hover[title] {
        font-style: italic;
        width: 1rem;
        color: whitesmoke;
        background: black;
        content: "<";
    } */

    .close:hover {
        rotate: 45deg;
    }
    .float-right {
        display: block;
        width: 100%;
        text-align: right;
    }

    .list {
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
