<script>
    let worker = "";
    $: worker = worker.toUpperCase();
</script>

<input
    class="input"
    type="text"
    bind:value={worker}
    placeholder="entre le nom de l'agent"
/>

<style>
    input {
        margin-right: 1rem;
        /* transform: rotateY(180deg); */
        transition-duration: 250ms;
        /* transform: fade */
        /* transition-duration: 250ms; */
        border: 1px solid rgba(0, 0, 0, 0.25);
        padding: 8px 8px;
        border-radius: 4px;
        /* margin-right: 1rem; */
    }
</style>
