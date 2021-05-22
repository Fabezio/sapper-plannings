<script>
    import Vacation from "./Vacation.svelte";
    export let str = "";
    export let employees = [];
    let color = "primary";
    if (str !== "07h-19h") color = "dark";
</script>

<div class="text-capitalize p-2 " style="max-width:  16rem; min-width: 11rem;">
    <!-- <div class="text-{color}">{str}</div> -->
    {#each employees as vacation, i}
        {#if vacation.period === str}
            <Vacation {color} {vacation} />
        {/if}
    {/each}
</div>
