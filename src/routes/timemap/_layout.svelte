<!-- <script context="module">
    export function preload() {
        return this.fetch(`timemap.json`)
            .then((r) => r.json())
            .then((months) => {
                //const {mois} =timemap
                return { months };
            });
    }
</script> -->
<script>
    // import { litteralFormatter } from "../../services/dateTimeFormatter";
    // import timemap from "../../data/timemap";
    // let { months } = timemap;
    export let segment;
    // export let months;
    // const date = new Date();
    // const today = litteralFormatter.format(date);
    // const mois = today.split(" ")[2];
</script>

<!-- <svelte:window on:keydown={(e) => alert(e.key)} /> -->

<!-- {@debug segment} -->

<!-- <div class="container text-center">
    <div class="btn-group mb-4">
        {#each months as { monthName, days }}
            {#if days}
                <a
                    href="timemap/{monthName}"
                    aria-current={segment === monthName ? "page" : undefined}
                    class="btn mr-2 btn-outline-success text-uppercase {monthName ===
                        segment && 'active'}"
                    title="nombre de jours: {days.length}"
                >
                    {monthName}
                </a>
            {/if}
        {/each}
    </div>
</div> -->

<slot {segment} />
