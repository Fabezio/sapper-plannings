<script>
    // import Vacation from "./Vacation.svelte";
    import Card from "./Card.svelte";
    export let day;
    day.color = "default";
    day.border = "secondary";

    const { jour, weekday, employees, ferie } = day;
    let { color, border } = day;
    $: if (weekday === "samedi" || weekday === "dimanche" || ferie) {
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
        {weekday.slice(0, 3)}
        {jour}
    </span>
    <Card {employees} str="07h-19h" />
    <Card {employees} str="19h-07h" />
</div>
