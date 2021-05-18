<script>
    export let id;
</script>
<div>
    <span>
        {id.nom}
    </span>
    <span class="prenom">
        {id.prenom && `, ${id.prenom}`}
    
    </span>

</div>

<style>
        @media screen and (max-width: 480px) {
    .prenom {
display: none
        }
        div {
            width: auto;
        }
    }
</style>
