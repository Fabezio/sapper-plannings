<script>
    // import Vacation from "./Vacation.svelte";
    import Card from "./Card.svelte";
    export let day;
    const { jour, weekday, employees } = day;
</script>

<div class="card-deck">
    {weekday}
    {jour}
    <Card {employees} str="07h-19h" />
    <Card {employees} str="19h-07h" />
</div>
