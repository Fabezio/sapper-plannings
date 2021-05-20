<script>
    // import Vacation from "./Vacation.svelte";
    import Card from "./Card.svelte";
    export let day;
    const { jour, weekday, employees ,ferie} = day;

    function isWeekend (day) {
        if(day=== 'sam.' || day==='dim.') return 'alert alert-success border-success shadow-sm' 
        else if (ferie) return 'alert alert-primary border-primary shadow-sm'
        else return 'alert alert-default border-dark shadow-sm'
    }
</script>

<div class="card-deck mx-auto border-dark p-1 {isWeekend(weekday) }">
    <span class="text-center" style="min-width: 5rem;">
        {weekday}
        {jour}
        
            </span>
    <Card {weekday} {ferie} {employees} str="07h-19h" />
    <Card {weekday} {ferie} {employees} str="19h-07h" />
</div>
