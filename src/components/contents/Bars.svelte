<script >
    import Day from "./Day.svelte"
    export let months
    export let thisPerson
    export let filteredDays
    export let mois
    export let dateNb
</script>

{#if thisPerson.length > 0}
	{#each months as { monthName, days }}
		{#if mois === monthName}
			{#each filteredDays as day, i}
				{#if day.dayNb >= dateNb}
					<Day {day} />
				{/if}
			{/each}
		{/if}
	{/each}
{:else}
	{#each months as { monthName, days }}
		{#if mois === monthName}
			{#each days as day}
				{#if day.dayNb >= dateNb}
					<Day {day} />
				{/if}
			{/each}
		{/if}
	{/each}
{/if}