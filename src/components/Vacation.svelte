<script>
    export let vacation = {};
    const { period, service, employment, employee } = vacation;
</script>

<div class="{employment ==='SSIAP 2' && 'font-weight-bold'}">
    <!-- {period} -->
    <!-- {service}
        {employment}
    -->
    {employee.nom}, {employee.prenom}
</div>
