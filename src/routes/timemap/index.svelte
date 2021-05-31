<script context="module">
    export function preload() {
        return this.fetch(`timemap.json`)
            .then((r) => r.json())
            .then((months) => {
                //const {mois} =timemap
                return { months };
            });
    }
</script>

<script>
    import { litteralFormatter } from "../../services/dateTimeFormatter";
    import MonthName from "./[monthName].svelte";
    import Day from "../../components/contents/Day.svelte";
    export let months;
    const date = new Date();
    const today = litteralFormatter.format(date);
    const mois = today.split(" ")[2];

    const title = "Planning version 2";
    console.log(typeof months);
</script>

<h2 class="text-uppercase mb-3">
    {title}
</h2>
<p>Aujourd'hui: {today}</p>
{@debug mois}
<!-- <MonthsNav {months} /> -->

<!-- {@debug segment} -->
<div class="container text-center">
    <div class="btn-group mb-4">
        {#each months as { monthName, days }}
            {@debug monthName}
            {#if days}
                <a
                    href="timemap/{monthName}"
                    rel="prefetch"
                    class="btn mr-2 btn-outline-success text-uppercase {mois ===
                        monthName && 'active'}"
                    title="nombre de jours: {days.length}"
                >
                    {monthName}
                </a>
            {/if}
        {/each}
    </div>
</div>
<br />
{#each months as { monthName, days }}
    {#if mois === monthName}
        {#each days as day}
            <Day {day} />
        {/each}
    {/if}
{/each}
