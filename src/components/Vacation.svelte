<script>
    export let vacation = {};
    const { period, service, employment, employee } = vacation;
</script>

<div class="">
    <!-- {period} -->
    <!-- {service} -->
    {employment}
    {employee.nom}, {employee.prenom}
</div>
