<script>
    import Eff from "./Eff.svelte"
    export let el
    const { jour, weekday, agentJour, agentNuit, chefJour, chefNuit, ferie } = el
</script>

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
        justify-content: space-evenly;
    }

    .date {
        padding: 0 1rem;
        max-width: 7rem;
        
    }
    .boxes {
        display: flex;
        flex-direction: row;
    }
   
    @media screen and (max-width: 480px) {
        .boxes {
            flex-direction: row;
            /* width: auto; */
            max-width: 6rem;
        }
        .flex {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            justify-content: flex-start;
        }
        .bar {
            max-width: 100%;
        max-height: 8rem;
        padding: 0;
        font-size: .9rem;
        }
      
        .date {
            margin: 0;
            max-width: 3rem;
        }
    }
    .right {
        margin: 1rem 0;
        display: flex;
        justify-content: flex-end;
        /* text-align: right; */
        /* vertical-align: top; */
    }
    
    

</style>