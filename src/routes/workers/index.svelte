<script>
    import { mai, ADS, namesList } from "../../services/workers.js";
</script>

<h2>individuels</h2>
<ul>
    {#each namesList as name}
        <li>
            <a href="workers/{name}">
                {name}
            </a>
        </li>
    {/each}
</ul>
