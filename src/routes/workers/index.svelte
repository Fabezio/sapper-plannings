<script>
    import { mai, ADS, namesList } from "../../services/workers.js";
    // import filter from "../../static/filter.png";
    // import Workers from "../components/Workers.svelte";

    // const { mai } = plannings;
    // const { ADS } = mai;

    // const namesList = [];
    // function isInList(obj) {
    //     if (!namesList.includes(obj.nom.toUpperCase()))
    //         return namesList.push(obj.nom.toUpperCase());
    // }
    // ADS.map(({ agentJour, agentNuit, chefJour, chefNuit }) => {
    //     isInList(agentJour);
    //     isInList(agentNuit);
    //     isInList(chefJour);
    //     isInList(chefNuit);
    // });
    // namesList.sort();
</script>

<h2>individuels</h2>
<ul>
    {#each namesList as name}
        <li>
            <a href="workers/{name}">
                {name}
            </a>
        </li>
    {/each}
</ul>
