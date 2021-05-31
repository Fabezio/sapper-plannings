<script>
    // import { createEventDispatcher } from "svelte";
    import {
        // numericFormatter,
        litteralFormatter,
    } from "../../services/dateTimeFormatter";
    export let thisPerson;
    export let namesList;
    // export let timemap;
    export let monthName;
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
        monthName.days.map((day) => {
            const { employees, dayNb, weekday } = day;
            if (dayNb >= thisDay) {
                employees.map(({ employee }) => {
                    const { lastname, firstname } = employee;
                    const LASTNAME = lastname.toUpperCase();

                    if (
                        thisPerson.length > 0 &&
                        thisPerson == employee.LASTNAME
                    ) {
                        filteredDays = [...filteredDays, day];
                    }
                    if (!namesList.includes(LASTNAME)) {
                        namesList = [...namesList, LASTNAME];
                    }
                });
            }
        });

        return thisPerson, filteredDays;
    }
</script>

<div class="d-flex flex-wrap justify-content-start my-3">
    <!-- {@debug namesList} -->
    {#each namesList as person}
        <!-- {@debug person} -->
        <button
            class="btn btn-sm btn-outline-primary me-1 mb-1"
            on:click={selectPerson}>{person}</button
        >
    {/each}
    <p>{thisPerson}</p>
</div>
