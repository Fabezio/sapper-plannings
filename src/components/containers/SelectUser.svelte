<script>
    import { createEventDispatcher } from "svelte";
    // import { mai, ADS, namesList } from "../../services/workers.js";
    // import Sheet from "../../components/Sheet.svelte";
    const dispatch = createEventDispatcher();
    export let worker;
    export let list;
    $: worker = worker.toUpperCase();
    function selectWorker(obj) {
        return (worker = obj);
    }
    $: console.log(worker);
</script>

<div class="list">
    {#each list as thisname}
        <div class="el">
            <button
                href="#{thisname}"
                on:click={() => dispatch("select", thisname)}
            >
                <!-- <button href="#{thisname}" on:click={() => (worker = thisname)}> -->
                {thisname}
            </button>
        </div>
    {/each}
</div>

<style>
    button {
        min-width: 7rem;
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        padding: 4px;
        font-size: 1.25 rem;
        margin: 1px;
    }
    /* .el {
    } */

    .list {
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
