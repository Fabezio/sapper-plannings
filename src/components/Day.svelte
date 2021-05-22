<script>
    // import Vacation from "./Vacation.svelte";
    import Card from "./Card.svelte";
    export let day;
    day.color = "default";
    day.border = "secondary";
    let { jour, weekday, employees, ferie, color, border } = day;
    $: if (weekday === "sam." || weekday === "dim." || ferie) {
        color = "success";
        border = "success";
    }
</script>

<div
    class="card-deck mx-auto border-2 border-{border} p-1 alert alert-{color} shadow-sm "
>
    <span
        class="text-center mt-2 font-weight-bold text-dark  "
        style="min-width: 5rem;"
    >
        {weekday}
        {jour}
    </span>
    <Card {weekday} {ferie} {employees} str="07h-19h" />
    <Card {weekday} {ferie} {employees} str="19h-07h" />
</div>
