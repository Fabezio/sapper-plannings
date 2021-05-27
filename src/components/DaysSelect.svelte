<script>
    import Day from "./Day.svelte";
    export let month;
    // let { jours } = month;
</script>

<!-- <h2>C'est un grand jour!</h2> -->
<!-- {@debug month.nom} -->
<!-- {month.nom} -->
{#each month.jours as day, i}
    <Day {day} />
{/each}
