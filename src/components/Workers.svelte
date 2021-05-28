<script>
    import { litteralFormatter } from "../services/dateTimeFormatter";
    import Bar from "./contents/bars/Bar.svelte";

    export let isToday;
    export let arr;
    const date = new Date();
    const today = date.getDate();
    let seeAll = false;
    function dispatchAll() {
        return (seeAll = !seeAll);
    }

    // console.log("nom:", arr);
</script>

<!-- <div class="right">
    <button class="" on:click={dispatchAll}
        >voir {seeAll ? "depuis aujourd'hui" : "tout"}</button
    >
</div> -->
<!-- <div>{formatter.format(thisDay)}</div> -->

<!-- {#if arr.length }
    <div class="flex bar warn">
        TRAVAILLEUR <span class="italic">{worker}</span> NON PLANIFIE DANS CETTE
        PERIODE
    </div>
{/if} -->
<h3>Aujourd'hui: {litteralFormatter.format(date)}</h3>

{#each arr as el, i}
    <!-- {#if !jour && !worker}<hr />{/if} -->
    <!-- {@debug i} -->
    <!-- {#if jour < today && !seeAll}
        <div class="flex bar warn">
            TRAVAILLEUR <span class="italic">{worker}</span> NON PLANIFIE DANS CETTE
            PERIODE
        </div>
    {/if} -->
    {#if seeAll}
        <Bar {el} />
    {:else if el.jour === today && isToday}
        <Bar {el} />
    {:else if el.jour >= today && !isToday}
        <Bar {el} />
    {/if}
{/each}
