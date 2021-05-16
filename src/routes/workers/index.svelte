<script>
    import { mai, ADS, namesList } from "../../services/workers.js";
    import Sheet from "../../components/Sheet.svelte";
    let worker = "";
    function generatePlanning(obj) {
        return (worker = obj);
    }
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
    $: worker = worker.toUpperCase();
</script>

<h2>Agents planifiés</h2>
<p>Clique sur un nom ci-dessous</p>
<div class="list">
    {#each namesList as thisname}
        <div class="el">
            <button href="#{thisname}" on:click={() => (worker = thisname)}>
                {thisname}
            </button>
        </div>
    {/each}
</div>

{#if namesList.includes(worker)}
    <Sheet {worker} arr={ADS} />
{:else if worker.length > 0 && !namesList.includes(worker)}
    nom non correspondant, vérifie l'orthoghraphe
{/if}

<style>
    button {
        min-width: 7rem;
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        padding: 4px;
        font-size: 1.25 rem;
        margin: 1px;
    }
    .el {
    }

    .list {
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    h2 {
        text-align: center;
        margin: 2rem auto;
    }
</style>
