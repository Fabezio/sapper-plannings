<script>
    // import Vacation from "./Vacation.svelte";
    import Card from "./Card.svelte";
    export let day;
    day.color = "default";
    let { jour, weekday, employees, ferie, color } = day;
    $: if (weekday === "sam." || weekday === "dim." || ferie) {
        color = "success";
    }
</script>

<div
    class="card-deck mx-auto border-2 border-dark p-1 alert alert-{color} shadow-sm "
>
    <span class="text-center mt-2" style="min-width: 5rem;">
        {weekday}
        {jour}
    </span>
    <Card {weekday} {ferie} {employees} str="07h-19h" />
    <Card {weekday} {ferie} {employees} str="19h-07h" />
</div>
