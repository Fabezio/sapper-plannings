<script>
    import planning from "../../data/newPlanning2";
    import formatter from '../../services/dateTimeFormatter'
    
    const mai = planning.mois[4]
    const {jours} = mai
    const date = new Date()
    const today = formatter.format(date)
    const dayNumber = today.split(' ')[1]
    // console.log( planning.mois[4])
    
</script>
<div class="container">
<h1>mise à jour planning</h1>
<!-- <button class='btn btn-primary' >bouton</button>
<button class='btn-lg btn-success' >bouton</button>
<button class='btn-sm btn-warning' >bouton</button>
<div class='badge badge-danger rounded'>balise</div> -->

<h2 class="display-3">{mai.nom}</h2>
<h3>aujourd'hui: {today}</h3>
{@debug today}
 <h4>Agents travaillant ce jour:</h4>

 


 {#each jours  as {jour, weekday, employees}}
 {#if jour==dayNumber}
 <div class="card-deck">{weekday} {jour} 
    <div class="card">
    <div  class="card-title">07h-19h</div>
    {#each employees as {period, service, employment,  employee},i}
    
    {#if period==="07h-19h"}
    <div class="">
        <!-- {period} -->
        <!-- {service} -->
        {employment}
        {employee.nom}, {employee.prenom}
        
    </div>
    
    
    
    {/if}   
    {/each}
</div>
    <div class="card">
    <div class="card-title">19h-07h</div>
    {#each employees as {period, service, employment,  employee},i}
        {#if period==="19h-07h"}
            <div class="">
                <!-- {period} -->
                <!-- {service} -->
                {employment}
                {employee.nom}, {employee.prenom}
                
            </div>

        
            
        {/if}   
         
     {/each} 
     </div>
     </div>
     {/if}
 {/each}
<h3>Planning général</h3>
 {#each jours  as {jour, weekday, employees}}
 
 <div class="card-deck">{weekday} {jour} 
    <div class="card">
    <div  class="card-title">07h-19h</div>
    {#each employees as {period, service, employment,  employee},i}
    
    {#if period==="07h-19h"}
    <div class="">
        <!-- {period} -->
        <!-- {service} -->
        {employment}
        {employee.nom}, {employee.prenom}
        
    </div>
    
    
    
    {/if}   
    {/each}
</div>
    <div class="card">
    <div class="card-title">19h-07h</div>
    {#each employees as {period, service, employment,  employee},i}
        {#if period==="19h-07h"}
            <div class="">
                <!-- {period} -->
                <!-- {service} -->
                {employment}
                {employee.nom}, {employee.prenom}
                
            </div>

        
            
        {/if}   
         
     {/each} 
     </div>
     </div>
     
 {/each}

</div>