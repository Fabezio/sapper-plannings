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

    // console.log( planning.mois[4])
    // Liste des agents
    let namesList = [];
    jours.map(({ employees, jour }) => {
        employees.map(({ employee }) => {
            const { nom, prenom } = employee;
            if (!namesList.includes(nom)) {
                namesList = [...namesList, nom];
            }
        });
    });
    namesList.sort();
    // namesList = [...Array(20).keys()].join(" ");
</script>

<div class="container">
    <!-- <h1>mise à jour planning</h1> -->
    <!-- <button class='btn btn-primary' >bouton</button>
<button class='btn-lg btn-success' >bouton</button>
<button class='btn-sm btn-warning' >bouton</button>
<div class='badge badge-danger rounded'>balise</div> -->

    <h2 class="display-4 text-center text-uppercase">Mois de {mai.nom}</h2>
    <div class="d-flex flex-wrap justify-content-start">
        {#each namesList as person}
            <!-- <p>{person.join(", ")}</p> -->
            <button class="btn btn-sm btn-outline-info mr-1 mb-1"
                >{person.toUpperCase()}</button
            >
        {/each}
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
    <Title3>Planning général</Title3>
    {#each jours as day}
        <Day {day} />
    {/each}
</div>
