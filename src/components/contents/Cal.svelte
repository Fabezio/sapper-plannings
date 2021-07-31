
<script>
    import Calendar from "svelte-calendars"
    export let jours
    /*
    export let months
    export let mois
    export let thisPerson
    */
    export let dateNb

    let weekdayCols = []
    
    
</script>

<div class="seven-days-grid container">
    {#each jours as jour}
    <span>{jour}</span>
    {/each}

</div>
{@debug weekdayCols}
{@debug dateNb}
<!--
    
    {#each months as { monthName, days }}
    {#if mois === monthName}
    <div class="seven-days-grid container">
        {#each days as day}
        
        <span>{day.dayNb}</span>
        
        {#if day.dayNb >= dateNb}
        
        {/if}
        
        {/each}
    </div>
    {/if}
	{/each}
-->
    <Calendar />


<style>
    .seven-days-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);

    }
</style>

