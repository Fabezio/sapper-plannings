<script>
    // import Vacation from "./Vacation.svelte";
    import Card from "./bars/Card.svelte";
    export let day;
    day.color = "default";
    day.border = "secondary";

    const { dayNb, weekday, employees, ferie } = day;
    let { color, border } = day;
    $: if (weekday === "samedi" || weekday === "dimanche" || ferie) {
        color = "success";
        border = "success";
    }
</script>

<div
    class="w-75 row justify-content-md-between card-deck mx-auto rounded-3 border-2 border-{border} p-1 alert alert-{color} shadow-sm "
>
    <span
        class="col-2 text-center mt-2 font-weight-bold text-dark  "
        style="min-width: 5rem;"
    >
        {weekday.slice(0, 3)}.
        {dayNb}
    </span>
    <Card {employees} {color} str="07h-19h" />
    <Card {employees} {color} str="19h-07h" />
</div>
