<script>
    import Eff from "./Eff.svelte";
    export let arr;
    // export let worker;
    const today = new Date().getDate();
    let seeAll = false;
    function dispatchAll() {
        return (seeAll = !seeAll);
    }
    console.log("nom:", arr);
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
{#each arr as { jour, weekday, agentJour, agentNuit, chefJour, chefNuit, ferie }, i}
    <!-- {#if !jour && !worker}<hr />{/if} -->
    <!-- {@debug i} -->
    <!-- {#if jour < today && !seeAll}
        <div class="flex bar warn">
            TRAVAILLEUR <span class="italic">{worker}</span> NON PLANIFIE DANS CETTE
            PERIODE
        </div>
    {/if} -->
    {#if seeAll}
        <div
            class="flex bar {(ferie ||
                weekday === 'sam.' ||
                weekday === 'dim.') &&
                'we'}"
        >
            <div class="date title">
                <span>
                    {weekday}
                    {jour}
                </span>
            </div>

            <div class="boxes">
                <Eff vac="🌞" chef={chefJour} agent={agentJour} />
                <Eff vac="🌜" chef={chefNuit} agent={agentNuit} />
            </div>
        </div>
    {:else if jour >= today}
        <div
            class="flex bar {(ferie ||
                weekday === 'sam.' ||
                weekday === 'dim.') &&
                'we'}"
        >
            <div class="date title">
                {weekday}
                {jour}
            </div>

            <div class="boxes">
                <Eff vac="🌞" chef={chefJour} agent={agentJour} />
                <Eff vac="🌜" chef={chefNuit} agent={agentNuit} />
            </div>
        </div>
    {/if}
{/each}

<style>
    .we {
        background: rgba(0, 127, 0, 0.33);
    }
    .italic {
        font-style: italic;
        margin: 0 0.667rem;
        font-weight: 600;
    }
    .title {
        font-weight: bold;
        align-self: center;
    }
    .warn {
        background: gold;
    }
    .bar {
        border: 2px ridge rgba(0, 0, 0, 0.25);
        max-width: 760px;
        margin: 4px auto;
        border-radius: 7px;
        box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
    }
    .flex {
        display: flex;
        padding: 1rem;
        justify-content: center;
    }

    .date {
        padding: 1rem;
        max-width: 7rem;
    }
    .boxes {
        display: flex;
        flex-direction: row;
    }
    button {
        z-index: 1;
    }
    @media screen and (max-width: 480px) {
        .boxes {
            flex-direction: column;
        }
        .flex {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
    }
    .right {
        margin: 1rem 0;
        display: flex;
        justify-content: flex-end;
        /* text-align: right; */
        /* vertical-align: top; */
    }
    button {
        text-transform: uppercase;
    }
    @media screen and (max-width: 480px)  {
        .bar {
            max-width: 480px;
        }
        .boxes {
            width: auto;
        }
        .date {
            margin: 0;
        }
    }

</style>
