<script>
    export let vacation = {};
    const { employment, employee } = vacation;
    // $: { period, service, employment, employee } = vacation;
    const { nom, prenom } = employee;
    export let color;
    $: if (!nom.length) {
        nom = "- - - - -";
        color = "danger";
    } else if (nom.toLowerCase().includes("permanence")) {
        color = "warning";
    }
</script>

<div class="text-{color} {employment === 'SSIAP 2' && 'font-weight-bold'}">
    <!-- {@debug period} -->
    <!-- {period} -->
    <!-- {service}
        {employment}
    -->
    {nom}{prenom &&
        `, ${prenom}
    `}
</div>
