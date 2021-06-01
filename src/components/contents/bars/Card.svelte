<script>
    import Vacation from "./Vacation.svelte";
    export let str = "";
    export let employees = [];
    export let color;
    let textColor = "dark";
    if (str !== "07h-19h") textColor = "dark";
</script>

<div class="text-capitalize p-2 col-5" style="min-width: 10rem;">
    <!-- <div class="text-{textColor}">{str}</div> -->
    {#each employees as vacation, i}
        {#if vacation.period === str}
            <Vacation {textColor} {color} {vacation} />
        {/if}
    {/each}
</div>
