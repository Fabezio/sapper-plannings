<script>
    export let worker;
    export let arr;
</script>

<h3>{worker}</h3>

<!-- <div class="text-center"> -->
<table>
    <tr>
        <th colspan="2">jour</th>
        <th>site</th>
        <th>heures</th>
        <th>fonction</th>
    </tr>
    {#each arr as { ferie, jour, weekday, agentJour, agentNuit, chefJour, chefNuit }}
        <tr class={(ferie || weekday === "sam." || weekday === "dim.") && "we"}>
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

<!-- </div> -->
<style>
    .we {
        background: rgba(0, 127, 0, 0.33);
    }
    h3 {
        text-align: center;
        margin: 2rem auto;
    }
    table {
        min-width: 760px;
        /* max-width: 1200px; */
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
        max-width: 4rem;
    }
    @media screen and (max-width: 480px) {
        /* .text-center {
            margin: 0 auto;
            text-align: center;
        } */
        table {
            text-align: center;
            max-width: 100%;
            min-width: 100%;
            margin: 0;
        }
    }
</style>
