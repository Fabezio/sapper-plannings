<script>
    import planning from "../../data/newPlanning2";
    const mai = planning.mois[4]
    const {jours} = mai
    // console.log( planning.mois[4])
    
</script>
<h1>mise à jour planning</h1>
<!-- <button class='btn btn-primary' >bouton</button>
<button class='btn-lg btn-success' >bouton</button>
<button class='btn-sm btn-warning' >bouton</button>
<div class='badge badge-danger rounded'>balise</div> -->
 {@debug mai}
 <h2 class="display-3">{mai.nom}</h2>
 {#each jours  as {jour, weekday, employees}}
     <div>{weekday} {jour} 
        {#each employees as {period, service, employment,  workers}}
        {@debug workers}
        <div class="">
            {period}
            {service}
            {employment}
            {#each workers as worker,i}
                <span>
                    {worker.join(", ")}
                </span>
            {/each}
        </div>
         
     {/each} </div>
 {/each}

