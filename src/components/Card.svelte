<script>
    import Vacation from "./Vacation.svelte";
    export let str = "";
    export let employees = [];
    export let weekday
    export let ferie
    function isWeekend (day) {
        if(day=== 'sam.' || day==='dim.') return 'bg-success' 
        else if (ferie) return 'bg-info'
    }
</script>

<div class="card text-capitalize p-2 {isWeekend(weekday)}" style="max-width:  16rem;">
    <div class="card-title">{str}</div>
    {#each employees as vacation, i}
        {#if vacation.period === str}
            <Vacation {vacation} />
        {/if}
    {/each}
</div>
