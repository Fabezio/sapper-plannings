<script>
    import planning from "../../data/newPlanning2";
    import formatter from "../../services/dateTimeFormatter";
    import Day from "../../components/Day.svelte";
    import Title3 from "../../components/headings/Title3.svelte";

    const mai = planning.mois[4];
    const { jours } = mai;
    const date = new Date();
    const today = formatter.format(date);
    const dayNumber = today.split(" ")[1];
    const thisDay = today.split(" ")[1];
    // console.log( planning.mois[4])
    // Liste des agents
    let namesList = [];
    jours.map(({ employees, jour }) => {
        if (jour >= thisDay) {
            employees.map(({ employee }) => {
                const { nom, prenom } = employee;
                if (!namesList.includes(nom.toUpperCase())) {
                    namesList = [...namesList, nom.toUpperCase()];
                }
            });
        }
    });
    namesList.sort();
    let thisPerson = "";
    // function selectPerson(e) {
    //     if (e.target.person) {
    //         return (thisPerson = e.target.person);
    //     }
    // }
    // selectPerson();
    // namesList = [...Array(20).keys()].join(" ");
</script>

<!-- {@debug thisPerson} -->

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
            <button class="btn btn-sm btn-outline-info mr-1 mb-1"
                >{person}</button
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
        {#if day.jour == dayNumber}
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
