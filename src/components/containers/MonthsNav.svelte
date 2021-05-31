<script>
    export let months;
</script>

{#each months as { monthName, days }}
    {#if days}
        <a
            href="timemap/{monthName}"
            rel="prefetch"
            class="btn mr-2 btn-outline-success text-uppercase"
            title="nombre de jours: {days.length}"
        >
            {monthName}
        </a>
    {/if}
{/each}
