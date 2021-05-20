<script>
    import Vacation from "./Vacation.svelte";
    export let str = "";
    export let employees = [];
</script>

<div class="card">
    <div class="card-title">{str}</div>
    {#each employees as vacation, i}
        {#if vacation.period === str}
            <Vacation {vacation} />
        {/if}
    {/each}
</div>
