<script>
    import { mai, ADS, namesList } from "../services/workers.js";
    import filter from "../../static/filter.png";
    import Workers from "../components/Workers.svelte";
    let displayPlanning = false;
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
    const today = new Date().getDate();
    let joursDispo = []
    ADS.map(({jour}) => {
        if (jour >= today) {
            joursDispo = [...joursDispo, jour]
        }
    })
    $: if (!handleFilter || worker === "") adsFilter = [];

    let worker = "";

    $: if (namesList.includes(worker)) displayFilteredList();
</script>

<h2>Mois actuel: {mai.month}</h2>
{#if !displayPlanning}
    <h2 class="subtitle">Agents disponibles</h2>
    <div class="list">
        {#each namesList as thisname}
            <div class="el">
                <button on:click={selectEmployee}>
                    {thisname}
                </button>
            </div>
        {/each}
    </div>
    <h2 class="subtitle">Prochain Jours</h2>
    <div class="list">
        {#each joursDispo as jour}
        <span class="jour">{jour >= today && jour }</span>
            
        {/each}
    </div>
{:else}
<section>
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
    
    </section>
{/if}

<style>
    .jours {
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .jour {
        justify-content: center;

        margin: 0 1rem;
    }
    section{
max-width: 800px;
margin: 0 auto;
    }
    .subtitle {
        font-variant:normal;
        font-weight: 300;
        
    }
    @media screen and (max-width: 480px) {
        h2 {
            /* text-align: center; */
            margin: 1rem auto;
        }
        section {
            max-width: 480px;
        }
    }
    h2 {
        text-transform: capitalize;
        font-variant:small-caps;
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
