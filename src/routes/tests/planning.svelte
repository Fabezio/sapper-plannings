<script>
    import planning from "../../data/newPlanning2";
    import {
        numericFormatter,
        litteralFormatter,
    } from "../../services/dateTimeFormatter";
    import Title3 from "../../components/headings/Title3.svelte";
    import Month from "../../components/contents/Month.svelte";
    import Day from "../../components/contents/Day.svelte";
    import Bar from "../../components/contents/bars/Bar.svelte";
    import Card from "../../components/contents/bars/Card.svelte";

    // planning.mois.map(({ jours, nom }, index) => {
    //     if (!jours) return;
    //     console.log(typeof jours);
    //     jours.map(({ jour, weekday }, j) => {
    //         const thatDay = new Date().setFullYear(2021, index, j + 1);
    //         const date = litteralFormatter.format(thatDay);
    //         weekday = date.split(" ")[0];
    //         // console.log(weekday, j + 1);
    //     });

    // });
    const month = new Date().getMonth();
    let monthNb;
    $: monthNb = month + 1;
    const date = new Date();
    const today = numericFormatter.format(date);
    const thisMonth = today.split(" ")[2];
    const thisDay = today.split(" ")[1];

    const { mois } = planning;
    let { jours } = planning.mois[4];
    function previousMonth() {
        return (monthNb -= 1);
    }
    function nextMonth() {
        return (monthNb += 1);
    }

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
        jours.map((day) => {
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
    $: jours.map((day) => {
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
</script>

<!-- <button on:click={previousMonth}>&larr;</button> -->
<Month month={monthNb} on:previous={previousMonth} on:next={nextMonth} />
<!-- Mois de {mois.nom} -->
<!-- <button on:click={nextMonth}>&rarr;</button> -->

<!-- 
{@debug filteredDays}

<div class="container">
    <h2 class="display-4 text-center text-uppercase">
        <button on:click={previousMonth}>&larr;</button>
        Mois de {mois.nom}
        <button on:click={nextMonth}>&rarr;</button>
    </h2>

    <div class="d-flex flex-wrap justify-content-start">
        {#each namesList as person}
            <button
                class="btn btn-sm btn-outline-info mr-1 mb-1"
                on:click={selectPerson}>{person}</button
            >
        {/each}
        <p>{thisPerson}</p>
    </div>
    <Title3>
        Aujourd'hui: {today}
    </Title3>

    {#each jours as day}
        {#if day.jour == thisDay}
            <Day {day} />
        {/if}
    {/each}

    {#if thisPerson.length > 0}
        <h3>Prochaines vacations de {thisPerson}</h3>
        <button class="btn btn-warning" on:click={() => (filteredDays = [])}
            >effacer</button
        >
        {#each filteredDays as day}
            {#if day.jour >= thisDay}
                <Day {day} />

                {@debug filteredDays}
            {/if}
        {/each}
    {:else}
        <Title3>Vacations restantes</Title3>
        {#each jours as day}
            {#if day.jour >= thisDay}
                <Day {day} />
            {/if}
        {/each}
    {/if}

    <Title3>Planning général</Title3>
    {#each jours as day}
        <Day {day} />
    {/each}
</div> -->
