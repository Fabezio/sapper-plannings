<script>
    // import { parse } from "path/posix";

    // import Vacation from "./Vacation.svelte";
    import Card from "./bars/Card.svelte";
    export let day;

    // export let i;
    day.color = "default";
    day.border = "secondary";

    const { weekday, employees, ferie } = day;
    let { dayNb, color, border } = day;
    $: if (weekday === "samedi" || weekday === "dimanche" || ferie) {
        color = "success";
        border = "success";
    }

    // $: dayNb = parseInt(dayNb);
    // dateNb = parseInt(dateNb);
    // console.log(typeof i);
    // console.log(typeof dateNb);
</script>

<!-- {#if i + 1 >= dateNb} -->
<div class="d-grid">
    <div
        class="day d-flex flex-row justify-content-center card-deck mx-auto rounded-3 border-2 border-{border} p-1 alert alert-{color} shadow-sm "
    >
        <span
            class=" text-center mt-2 font-weight-bold text-dark  "
            style="min-width: 5rem;"
        >
            {weekday.slice(0, 3)}.
            {dayNb}
        </span>
        <span>
            <span class="d-flex flex-row">
                <Card {employees} symbol="🌞" str="07h-19h" />

                <Card {employees} symbol="🌑" str="19h-07h" />
            </span>
        </span>
    </div>
</div>

<!-- {/if} -->
<style>
    .day {
        max-width: 1200px;
    }
</style>
