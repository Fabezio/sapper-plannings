<script>
    import planning from "../../data/newPlanning2";
    import formatter from "../../services/dateTimeFormatter";
    import Day from "../../components/Day.svelte";
    import Title3 from "../../components/headings/Title3.svelte";
    import Bar from "../../components/Bar.svelte";
    // import { each } from "svelte/internal";

    const mai = planning.mois[4];
    const { jours } = mai;
    const date = new Date();
    const today = formatter.format(date);
    const dayNumber = today.split(" ")[1];
    const thisDay = today.split(" ")[1];
    // console.log( planning.mois[4])
    // Liste des agents
    let namesList = [];
    namesList.sort();
    let thisPerson = "";
    let filteredDays = [];
    function selectPerson(e) {
        if (thisPerson.length > 0) {
            filteredDays = [];
        }
        thisPerson = e.target.innerText;
        return thisPerson;
        // if (e.target.innerText) {
        // }
    }
    $: jours.map(({ employees, jour, weekday }) => {
        if (jour >= thisDay) {
            employees.map(({ employee }) => {
                const { nom, prenom } = employee;
                if (
                    thisPerson.length > 0 &&
                    thisPerson == employee.nom.toUpperCase()
                ) {
                    filteredDays = [
                        ...filteredDays,
                        {
                            jour,
                            weekday,
                            employees,
                        },
                    ];
                    return filteredDays;
                }
                if (!namesList.includes(nom.toUpperCase())) {
                    namesList = [...namesList, nom.toUpperCase()];
                }
            });
        }
    });

    // selectPerson();
    // namesList = [...Array(20).keys()].join(" ");
</script>

{@debug filteredDays}

<div class="container">
    <!-- <h1>mise à jour planning</h1> -->
    <!-- <button class='btn btn-primary' >bouton</button>
<button class='btn-lg btn-success' >bouton</button>
<button class='btn-sm btn-warning' >bouton</button>
<div class='badge badge-danger rounded'>balise</div> -->

    <h2 class="display-4 text-center text-uppercase">Mois de {mai.nom}</h2>
    <!-- <p>{namesList.join(" ")}</p> -->
    <div class="d-flex flex-wrap justify-content-start">
        {#each namesList as person}
            <!-- <p>{person.join(", ")}</p> -->
            <button
                class="btn btn-sm btn-outline-info mr-1 mb-1"
                on:click={selectPerson}>{person}</button
            >
            <!-- {@debug thisPerson} -->
        {/each}
        <p>{thisPerson}</p>
    </div>
    <Title3>
        Aujourd'hui: {today}
    </Title3>

    <!-- {@debug today} -->
    <!-- <Title3>Agents travaillant ce jour:</Title3> -->

    {#each jours as day}
        {#if day.jour >= dayNumber && thisPerson.length > 0}
            <h3>Prochaines vacations de {thisPerson}</h3>
            <Day {filteredDays} />
            <!-- {#each filteredDays as { jour, weekday, employees }}
                <p>
                    {weekday}
                    {jour}:
                    {#each employees as employee}
                        {employee.join(", ")}
                    {/each}
                </p>
            {/each} -->
            {@debug filteredDays}
        {:else if day.jour == dayNumber}
            <Day {day} />
        {/if}
    {/each}
    <Title3>Vacations restantes</Title3>
    {#each jours as day}
        {#if day.jour >= thisDay}
            <Day {day} />
        {/if}
    {/each}
    <Title3>Planning général</Title3>
    {#each jours as day}
        <Day {day} />
    {/each}
</div>
