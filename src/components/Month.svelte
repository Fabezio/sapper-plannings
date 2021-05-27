<script>
    import { createEventDispatcher } from "svelte";
    import planning from "../data/newPlanning2";
    import Title3 from "./headings/Title3.svelte";
    import Select from "./DaysSelect.svelte";
    // import Day from "./Day.svelte";
    import NamesList from "./NamesList.svelte";
    import {
        numericFormatter,
        litteralFormatter,
    } from "../services/dateTimeFormatter";
    import { select_multiple_value } from "svelte/internal";

    export let month;

    const dispatch = createEventDispatcher();
    const date = new Date();
    let currentMonth = "";
    $: currentMonth = planning.mois[month - 1].nom;
    const today = litteralFormatter.format(date);
    const thisDay = today.split(" ")[1];
    const numericDate = numericFormatter.format(date);
    const numericDateElements = numericDate.split("/");
    let solidNumericDateElements = [];
    numericDateElements.map((el) => {
        solidNumericDateElements = [...solidNumericDateElements, parseInt(el)];
    });

    let namesList = [];
    namesList.sort();
    let thisPerson = "";
    let filteredDays = [];

    function selectPerson(e) {
        console.log(e.target);

        if (thisPerson.length > 0) {
            thisPerson = "";
        }
        if (filteredDays.length > 0) {
            filteredDays = [];
        }
        thisPerson = e.target.innerText;
        planning.mois[month - 1].jours.map((day) => {
            const { employees, jour, weekday } = day;
            if (jour >= thisDay) {
                employees.map(({ employee }) => {
                    const { nom, prenom } = employee;

                    if (
                        thisPerson.length > 0 &&
                        thisPerson == employee.nom.toUpperCase()
                    ) {
                        filteredDays = [...filteredDays, day];
                    }
                    if (!namesList.includes(nom.toUpperCase())) {
                        namesList = [...namesList, nom.toUpperCase()];
                    }
                });
            }
        });

        return thisPerson, filteredDays;
    }
    $: planning.mois[month - 1].jours.map((day) => {
        const { employees, jour, weekday } = day;
        if (jour >= thisDay) {
            employees.map(({ employee }) => {
                const { nom, prenom } = employee;

                if (!namesList.includes(nom.toUpperCase())) {
                    namesList = [...namesList, nom.toUpperCase()];
                }
            });
        }
    });

    // const thisMonth = today.split(" ")[2];
    // const thisDay = today.split(" ")[1];
</script>

<!-- {@debug planning.length} -->
<!-- <h2>affichage du mois courant</h2> -->
<div class="display-4 d-flex justify-content-between container w-75 my-3">
    <button on:click={() => dispatch("previous")}>&larr;</button>
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
    <button on:click={() => dispatch("next")}>&rarr;</button>
</div>
<NamesList {thisPerson} {namesList} {planning} {month} />
<p>{thisPerson}</p>
<!-- <div class="d-flex flex-wrap justify-content-start">
    {#each namesList as person}
        <button
            class="btn btn-sm btn-outline-info mr-1 mb-1"
            on:click={selectPerson}>{person}</button
        >
    {/each}
    <p>{thisPerson}</p>
</div> -->

<Title3>Aujourd'hui {today}</Title3>
<!-- <Day day={thisDay} /> -->
<Select month={planning.mois[month - 1]} />
<p>{today}</p>
