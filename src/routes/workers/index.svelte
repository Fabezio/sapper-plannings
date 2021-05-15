<script>
    import { mai, ADS, namesList } from "../../services/workers.js";
    let worker = "";
    function generatePlanning(obj) {
        return (worker = obj);
    }
    const formatter = Intl.DateTimeFormat("fr", {
        weekday: "short",
        /* day: "numeric",
        month: "short",
        year: "numeric", */
    });
    ADS.map((el) => {
        const thisDay = new Date().setFullYear(2021, 5, el.jour);
        let weekDay = formatter.format(thisDay);
        // weekDay.length = 3;
        // weekDay.length = 3;
        el.weekday = weekDay.slice(0, 3);
        console.log(el.weekday);
        return el;
    });
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
<!-- <input
    class="input"
    type="text"
    bind:value={worker}
    placeholder="entre le nom de l'agent"
/><br /> -->
{#if namesList.includes(worker)}
    <h3>{worker}</h3>
    <table>
        <tr>
            <th colspan="2">jour</th>
            <th>site</th>
            <th>heures</th>
            <th>fonction</th>
        </tr>
        {#each ADS as { jour, weekday, agentJour, agentNuit, chefJour, chefNuit }}
            <tr>
                <td class="day-cell">{weekday}</td>
                <td class="day-cell">{jour}</td>
                <td
                    >{#if worker === agentJour.nom.toUpperCase() || worker === chefJour.nom.toUpperCase() || worker === agentNuit.nom.toUpperCase() || worker === chefNuit.nom.toUpperCase()}
                        Arcs de Seine
                    {/if}
                </td>
                <td
                    >{#if worker === agentJour.nom.toUpperCase() || worker === chefJour.nom.toUpperCase()}
                        07h00 - 19h00
                    {:else if worker === agentNuit.nom.toUpperCase() || worker === chefNuit.nom.toUpperCase()}
                        19h00 - 07h00
                    {/if}</td
                >
                <td>
                    {#if worker === chefJour.nom.toUpperCase() || worker === chefNuit.nom.toUpperCase()}
                        Chef d'équipe
                    {:else if worker === agentNuit.nom.toUpperCase() || worker === agentJour.nom.toUpperCase()}
                        agent
                    {/if}
                </td>
            </tr>
        {/each}
    </table>
{:else if worker.length > 0 && !namesList.includes(worker)}
    nom non correspondant, vérifie l'orthoghraphe
{/if}

<style>
    input {
        margin-right: 1rem;
        transition-duration: 250ms;
        transition-duration: 250ms;
        border: 1px solid rgba(0, 0, 0, 0.25);
        padding: 8px 8px;
        border-radius: 4px;
        margin-right: 1rem;
    }
    .el {
        padding: 0 1rem;
    }
    a {
        display: inline;
        text-decoration: none;
    }
    .list {
        margin: 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    h2,
    h3 {
        text-align: center;
        margin: 2rem auto;
    }
    table {
        min-width: 50%;
        max-width: 500px;
        margin: 0 auto;
        border: 2px solid black;
        border-collapse: collapse;
    }
    tr {
    }
    th {
        border-bottom: 2px solid black;
        text-align: center;
    }
    td {
        border-bottom: 1px solid black;
        text-align: center;
    }
    td.day-cell {
        margin: 0;
    }
</style>
