<script>
    import Vacation from "./Vacation.svelte";
    export let str = "";
    export let employees = [];
    // export let color;
    let textColor = "dark";
    if (str !== "07h-19h") textColor = "dark";
</script>

<span class="text-capitalize p-2 employee-card" style="min-width: 8rem;">
    <!-- <div class="text-{textColor}">{str}</div> -->
    {#each employees as vacation, i}
        {#if vacation.period === str}
            <Vacation {textColor} {vacation} />
        {/if}
    {/each}
</span>

<style>
</style>
