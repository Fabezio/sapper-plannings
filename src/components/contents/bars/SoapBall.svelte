<script>
    export let status = {};

    let text = "RAS";
    let bg = "success";

    let logo = "";
    let isVisible = false;

    $: {
        if (status === "demandé") {
            text = "Demande de permutation";
            bg = "warning";
            logo = "fas fa-question";
            isVisible = true;
        } else if (status === "accordé") {
            text = "Permutation accordée";
            bg = "success";
            logo = "fas fa-check";
            isVisible = true;
        } else if (status === "refusé") {
            text = "Permutation refusée";
            bg = "danger";
            logo = "fas fa-times";
            isVisible = true;
        } else if (status === "remplacement") {
            text = "Remplacement";
            bg = "warning";
            logo = "fas fa-running";
            isVisible = true;
        } else if (status === "en cours") {
            text = "en cours";
            bg = "info";
            logo = "fas fa-sync";
            isVisible = true;
        }
    }
</script>

<div
    title={text}
    class=" soap-ball bg-{bg} {!isVisible ? 'opacity-15' : 'logo-opacity'}"
/>

<!-- <h6>soap-ball</h6> -->
<style>
    .logo-opacity {
        opacity: 0.75;
    }
    .logo-opacity:hover {
        opacity: 1;
    }
    .opacity-15 {
        opacity: 0.15;
    }
    .soap-ball {
        position: relative;
        left: 10rem;
        top: 8px;
        border: 1px ridge silver;
        box-shadow: 1px 1px 1px darkslategray;
        border-radius: 50%;
        /* font-size: 0.75rem;
        padding: 0 8px;
        margin: 0 8px;
        box-sizing: border-box;
         */
        width: 12px;
        max-height: 12px;
        content: "";
    }
</style>
