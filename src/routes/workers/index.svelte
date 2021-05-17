<script>
    import { mai, ADS, namesList } from "../../services/workers.js";
    import Sheet from "../../components/Sheet.svelte";
    let worker = "";
    let displayPlanning = false;
    function generatePlanning(e) {
        displayPlanning = true;
        console.log(e.target.innerText);
        worker = worker.toUpperCase();
        console.log(worker);
        worker = e.target.innerText;
        return worker;
    }
    // let isClosing = false;
    /* const formatter = Intl.DateTimeFormat("fr", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    ADS.map((el) => {
        const thisDay = new Date().setFullYear(2021, 5, el.jour);
        let weekDay = formatter.format(thisDay);
        weekDay.length = 3;
        weekDay.length = 3;
        el.weekday = weekDay.slice(0, 3);
        console.log(el.weekday);
        return el;
    }); */
</script>

<h2>Mois actuel: {mai.month}</h2>
{#if !displayPlanning}
    <h2>Agents planifiés</h2>
    <!-- <p>Clique sur un nom ci-dessous</p> -->
    <div class="list">
        {#each namesList as thisname}
            <div class="el">
                <button on:click={generatePlanning}>
                    {thisname}
                </button>
            </div>
        {/each}
    </div>
{:else if namesList.includes(worker)}
    <button
        class="float-right close"
        title="fermer"
        on:click={() => (displayPlanning = false)}>&times;</button
    >
    <Sheet {worker} arr={ADS} />
{:else if worker.length > 0 && !namesList.includes(worker)}
    nom non correspondant, vérifie l'orthoghraphe
{/if}

<style>
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
    h2 {
        text-align: center;
        margin: 2rem auto;
    }
    @media screen and (max-width: 480px) {
        button {
            font-size: 0.8rem;
            min-width: 6.25rem;
        }
    }
</style>
