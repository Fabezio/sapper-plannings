<script>
    import About from "../../../routes/about.svelte";

    export let vacation = {};
    // export let symbol;
    const { employment, employee, status } = vacation;
    // $: { period, service, employment, employee } = vacation;
    let { lastname, firstname } = employee;
    export let textColor;
    // export let color;
    $: if (!lastname.length || lastname.toLowerCase() === "inconnu") {
        lastname = "- - - - -";
        firstname = "";
        textColor = "danger";
    } else if (lastname.toLowerCase().includes("permanence")) {
        firstname = ""
        textColor = "danger";
    }
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

    // let hasChanged = false;
    // let toChange = true;
</script>

<div class="text-{textColor} {employment === 'SSIAP 2' && 'fw-bold'} mb-1">
    <!-- {@debug period} -->
    <!-- {period} -->
    <!-- {service}
        {employment}
    -->
   <!--  <span
        title={text}
        class="fa-stack {!isVisible ? 'opacity-15' : 'logo-opacity'} "
    >
        <i class="fas fa-stack-2x fa-circle text-{bg}" />
        <i class="{logo} fa-stack-1x fa-lg fa-fw me-1 fa-inverse " />
    </span> -->
    <!-- <span class="change-logo bg-{bg}  rounded-circle badge-lg ">
        <span class=" fs-5" title={text}>{logo}</span>
    </span> -->

    {lastname}<span class="firstname">
        {firstname &&
            `, ${firstname}
        `}
    </span>
</div>

<style>
    .change-logo {
        width: 12px;
        height: 12px;
        padding: 3px 5px;
        margin-left: 8px;
        cursor: default;
        opacity: 0.75;
    }
    .logo-opacity {
        opacity: 0.75;
    }
    .logo-opacity:hover {
        opacity: 1;
    }
    .opacity-15 {
        opacity: 0.15;
    }

    .change-logo:hover {
        cursor: pointer;
        opacity: 1;
    }

    .firstname {
        display: inline;
        margin: 0;
        padding: 0;
    }
    @media screen and (max-width: 768px) {
        .firstname {
            display: none;
        }
    }
</style>
