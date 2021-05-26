<script>
    import planning from "../data/newPlanning2";
    import {
        numericFormatter,
        litteralFormatter,
    } from "../services/dateTimeFormatter";
    export let month;
    const date = new Date();
    let currentMonth = "";
    $: currentMonth = planning.mois[month - 1].nom;
    const today = litteralFormatter.format(date);
    const numericDate = numericFormatter.format(date);
    const numericDateElements = numericDate.split("/");
    let solidNumericDateElements = [];
    numericDateElements.map((el) => {
        solidNumericDateElements = [...solidNumericDateElements, parseInt(el)];
    });

    // const thisMonth = today.split(" ")[2];
    // const thisDay = today.split(" ")[1];
</script>

<!-- {@debug planning.length} -->
<h2>affichage du mois courant</h2>
<div class="display-4 d-flex justify-content-between container w-75">
    <button on:click={() => month--}>&larr;</button>
    <!-- <Month month={monthNb} /> -->
    <!-- Mois de {mois.nom} -->
    <div class="px-2">
        {#if month == solidNumericDateElements[1]}
            <p>mois actuel: {today.split(" ")[2]}</p>
        {:else if month < solidNumericDateElements[1]}<p class="text-secondary">
                {currentMonth}: Mois passé.
            </p>
        {:else}<p class="text-primary">{currentMonth}: planification à venir</p>
        {/if}
    </div>
    <button on:click={() => month++}>&rarr;</button>
</div>
<p>{today}</p>
