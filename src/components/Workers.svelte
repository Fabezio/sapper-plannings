<script>
    import Eff from "./Eff.svelte";
    export let arr;
    const today = new Date().getDate();
    let seeAll = false;
    function dispatchAll() {
        return (seeAll = !seeAll);
    }
    /* const formatter = Intl.DateTimeFormat("fr", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    arr.map((el) => {
        const thisDay = new Date().setFullYear(2021, 5, el.jour);
        let weekDay = formatter.format(thisDay);
        weekDay.length = 3;
        weekDay.length = 3;
        el.weekday = weekDay.slice(0, 3);
        console.log(el.weekday);
        return el;
    }); */
    console.log(arr);
</script>

<div class="right">
    <button class="" on:click={dispatchAll}
        >voir {seeAll ? "3 premiers" : "tout"}</button
    >
</div>
<!-- <div>{formatter.format(thisDay)}</div> -->

{#each arr as { jour, weekday, agentJour, agentNuit, chefJour, chefNuit, ferie }}
    {#if seeAll}
        <div
            class="flex bar {(ferie ||
                weekday === 'sam.' ||
                weekday === 'dim.') &&
                'we'}"
        >
            <div class="nb title">
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
            <div class="nb title">
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
    .title {
        font-weight: bold;
        align-self: center;
    }
    .bar {
        border: 2px ridge rgba(0, 0, 0, 0.25);
        margin: 4px 0;
        border-radius: 7px;
        box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
    }
    .flex {
        display: flex;
        padding: 1rem;
        justify-content: center;
    }

    .nb {
        padding: 1rem;
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
</style>
