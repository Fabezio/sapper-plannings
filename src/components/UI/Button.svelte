<script>
    import { createEventDispatcher } from "svelte";
    // import {fade} from 'svelte/transition'
    const dispatch = createEventDispatcher();
    export let variant = "default";
    export let size = "";
    export let gap = "0";
    let e;
</script>

<button
    class="{size
        ? `btn-${size}`
        : 'btn'} btn-{variant} border-dark me-{gap} mb-{gap} "
    on:click={() => dispatch("click")}><slot /></button
>
