<script>
    import { createEventDispatcher } from "svelte";
    import {
        // numericFormatter,
        litteralFormatter,
    } from "../services/dateTimeFormatter";
    export let thisPerson;
    export let namesList = [];
    export let planning;
    export let month;
    const date = new Date();
    const today = litteralFormatter.format(date);
    const thisDay = today.split(" ")[1];
    namesList.sort();
    // let thisPerson = "";
    let filteredDays = [];
    // const dispatch = createEventDispatcher();
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
</script>

<div class="d-flex flex-wrap justify-content-start my-3">
    {#each namesList as person}
        {@debug person}
        <button
            class="btn btn-sm btn-outline-info mr-1 mb-1"
            on:click={selectPerson}>{person}</button
        >
    {/each}
    <p>{thisPerson}</p>
</div>
