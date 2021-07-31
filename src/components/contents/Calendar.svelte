<script>
    import { Calendar } from "calendar";
    export let list = {};
    const cal = new Calendar(2);
    const m = cal.monthDates(2021, 7);
    let workedDays = [];
    list.map(({ dayNb, ferie, weekday }) => {
        let bg = "";
        if (ferie == undefined) ferie = false;
        if (ferie || weekday == "samedi" || weekday == "dimanche")
            bg = "warning";
        else {
            bg = "info";
        }
        workedDays = [...workedDays, { dayNb: parseInt(dayNb), bg, ferie }];
    });

    const calContent = m.flat();
    calContent.map((val, i) => {
        return (calContent[i] = parseInt(
            JSON.stringify(val).split("-")[2].slice(0, 2)
        ));
    });
    const date = new Date();
    const today = date.getDate();
    let newCal = [...m];
    let thisMonth = false;
    newCal.map(
        (w) =>
            w.map((d, i) => {
                let bg = "";
                let e = calContent[0];
                let color = "dark";
                if (e === 1) thisMonth = !thisMonth;
                if (i >= 5) bg = "info";
                let ferie = false;
                let selectedDay = {};
                workedDays.map((thisDay) => {
                    if (e === thisDay.dayNb && thisMonth) bg = "lime";
                    ferie = thisDay.ferie;
                    selectedDay = { wkBg: bg, ferie, dayNb: thisDay.dayNb };
                    return selectedDay;
                });

                if (!thisMonth) color = "muted";
                w[i] = {
                    day: e,
                    color,
                    bg,
                    wkBg: selectedDay.bg,
                    ferie: selectedDay.ferie,
                };

                calContent.shift();
                return w;
            })
        // console.table(w)
        // return w
    );
    console.table(newCal);
    const legend = [
        { color: "light", label: "Jour ouvré" },
        { color: "info", label: "Weekend / férié" },
        { color: "lime", label: "Jour travaillé" },
    ];
</script>

<table class="mx-auto rounded border border-2 border-dark container table ">
    <thead class="border-bottom border-2 border-dark">
        <tr class="py-3">
            {#each "lun mar mer jeu ven sam dim".split(" ") as day, i}
                <th class="text-center py-3 {i >= 5 && 'bg-info'}"
                    >{day.toUpperCase()}</th
                >
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each newCal as w, i}
            <tr>
                {#each w as { color, day, bg, ferie }, j}
                    <!-- {@debug i} -->
                    <td
                        class="text-{color} py-3 px-0 {day < today &&
                            'text-muted'} text-center {(j >= 5 || day == 14) &&
                            'bg-info'} {day == today &&
                            'fw-bolder border-2 shadow'}  "
                    >
                        <div class=" py-2 px-0 mx-0  {day && `bg-${bg}`} ">
                            <!-- {ferie} -->
                            {day}
                        </div>
                        <!-- {i}<br />
                        {d}
                        {w[i] < [i - 1]} -->
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
<!-- légende -->
<article class="container">
    <h3 class="text-uppercase">Légende</h3>
    {#each legend as rep}
        <div class="mb-2">
            <button class="rect bg-{rep.color}" />{rep.label}
        </div>
    {/each}
</article>

<!-- <div class="mb-2"><button class="rect bg-info" />Weekend, jour férié</div>
<div class="mb-2"><button class="rect bg-lime" />Jour travaillé</div>
<div class="mb-2">
    <button class="rect bg-warning" />Jour travaillé en périodé fériée ou
    weekend
</div> -->
<style>
    .bg-lime {
        background: lime;
    }
    .rect {
        content: "";
        width: 2.5rem;
        height: 1.25rem;
        margin-right: 7px;
        /* padding: 3rem 1.5rem; */
    }
    /* td span {
        width: 100px !important;
    } */
</style>
