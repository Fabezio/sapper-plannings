<script>
    // import Head from "../components/containers/Head.svelte";
    // const { default: Planning }=require("./planning.svelte")

    // const { default: Index } = require("$lib/Counter/index.svelte");

    // const date = new Date("2021", "5", "17");
    const date = new Date();
    const options = {
        year: "numeric",
        weekday: "long",
        day: "numeric",
        month: "long",
        week: "numeric",
    };
    const months = "janvier février mars avril mai juin juillet août septembre octobre novembre décembre".split(
        " "
    );
    const dates = [];
    const days = "lundi mardi mercredi jeudi vendredi samedi dimanche".split(
        " "
    );
    const formatter = Intl.DateTimeFormat("fr", options);
    const line = 7;
    const today = date.getDate();
    const weekday = date.getDay();
    let startingWeekDay = (weekday + 5 * 7 - today + 1) % 7;
    if (startingWeekDay === 0) startingWeekDay = 7;

    // const daysfromstart = (today - weekday) % 7;
    console.log(startingWeekDay);
</script>

<div class="main">
    <!-- <Head title="Calendrier" /> -->
    <!-- <h1>Calendrier</h1> -->

    <!-- <p>aujourd'hui: {formatter.format(date)}</p> -->

    <div class="grid">
        {#each days as day}
            <div class="bold">{day.slice(0, 3)}</div>
            <!-- <td>{day}</td> -->
        {/each}
        {#each [...Array(startingWeekDay - 1)] as day}
            <div class="box" id={day + 1} />
        {/each}
        <!-- {#if startingWeekDay < 7}
        {/if} -->
        {#each [...Array(31).keys()] as day}
            <div
                class="box {day + 1 < today && 'past'} {today === day + 1 &&
                    'today'}"
            >
                {day + 1}
            </div>
        {/each}
    </div>
</div>

<style>
    .main {
        width: 50%;
        margin: auto;
    }
    .grid {
        text-align: center;
        display: grid;
        text-align: center;
        /* margin: auto; */
        grid-template-columns: repeat(7, 1fr);
    }
    .bold {
        font-weight: bold;
    }
    .past {
        color: rgba(0, 0, 0, 0.2);
        /* background: silver; */
    }
    .today {
        color: green;
        font-weight: bold;
        text-shadow: 0 0 10px olive;
        font-size: 1.1rem;
    }
    .box {
        text-align: center;
        padding: 1rem;
        /* font-weight: 500; */
        transition-duration: 250ms;
    }
    .box:hover {
        /* font-size: 1.25rem; */
        transform: scale(1.25);
        font-weight: bolder;
    }
    @media screen and (max-width: 480px) {
        .main {
            width: 100%;
        }
    }
</style>
