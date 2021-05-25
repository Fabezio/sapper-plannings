<script>
    import planning from "../data/newPlanning2";
    import {
        numericFormatter,
        litteralFormatter,
    } from "../services/dateTimeFormatter";
    export let month;
    const date = new Date();
    const today = litteralFormatter.format(date);
    const numericDate = numericFormatter.format(date);
    const numericDateElements = numericDate.split("/");
    let solidNumericDateElements = [];
    numericDateElements.map((el) => {
        solidNumericDateElements = [...solidNumericDateElements, parseInt(el)];
    });

    // const thisMonth = today.split(" ")[2];
    // const thisDay = today.split(" ")[1];
</script>

<!-- {@debug planning.length} -->
<h2>affichage du mois courant</h2>
<p>{today}</p>
<p>{month === solidNumericDateElements[1]}</p>
