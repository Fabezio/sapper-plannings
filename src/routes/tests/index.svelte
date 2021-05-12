<script>
    import firebase from "firebase/app";
    import "firebase/database";
    import { onMount } from "svelte";

    let amis = {};
    onMount(() => {
        firebase
            .database()
            .ref("/ami/")
            .once("value")
            .then(function (snapshot) {
                amis = snapshot.val();
                console.log(amis);
            });
        // console.log(snapshot);
    });
    let friend = "";
    let status = "";
    function handleSubmit() {
        return (amis = [...amis, { nom: friend, statut: status }]);
    }
</script>

<h2>test base de données</h2>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={friend} placeholder="new firend" />
    <input type="text" bind:value={status} placeholder="friend status" />
    <button type="submit">Soumettre</button>
</form>
{#each Object.keys(amis) as ami}
    <div>
        {ami}: {amis[ami]}
    </div>
{/each}
