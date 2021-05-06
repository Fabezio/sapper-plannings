<script>
    export let id;
</script>

<span>
    {id.nom}{id.prenom && `, ${id.prenom}`}
</span>
