<script>
    export let vacation = {};
    const { period, service, employment, employee } = vacation;
    export let color;
    const { nom, prenom } = employee;
    $: if (!nom.length) {
        nom = "- - - - -";
        color = "danger";
    } else if (nom.toLowerCase().includes("permanence")) {
        color = "warning";
    }
</script>

<div class="text-{color} {employment === 'SSIAP 2' && 'font-weight-bold'}">
    {@debug period}
    <!-- {period} -->
    <!-- {service}
        {employment}
    -->
    {nom}{prenom &&
        `, ${prenom}
    `}
</div>
