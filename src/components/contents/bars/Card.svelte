<script>
    import Vacation from "./Vacation.svelte";
    export let str = "";
    export let symbol;
    export let employees = [];
    // export let color;
    let textColor = "dark";
    if (str !== "07h-19h") textColor = "muted";
</script>

<span class=" d-flex text-capitalize p-2 employee-card">
    <!-- <div class="text-{textColor}">{str}</div> -->

    <span class="me-1">{symbol}</span>
    <span class="flex-column">
        {#each employees as vacation, i}
            {#if vacation.period === str}
                <Vacation {textColor} {vacation} />
            {/if}
        {/each}
    </span>
</span>

<style>
    .employee-card {
        min-width: 14rem;
    }
    @media screen and (max-width: 480px) {
        .employee-card {
            min-width: 8rem;
        }
    }
</style>
