<script>
    import { Calendar } from "calendar";
    export let list = {};
    const cal = new Calendar(2);
    const m = cal.monthDates(2021, 6);
    console.table(m);
    let workedDays = [];
    list.map(({ dayNb, ferie, weekday }) => {
        let bg = "";
        if (ferie || weekday == "samedi" || weekday == "dimanche")
            bg = "warning";
        else bg = "info";
        workedDays = [...workedDays, { dayNb: parseInt(dayNb), bg }];
    });
    console.table(workedDays);

    const calContent = m.flat();
    calContent.map((val, i) => {
        return (calContent[i] = parseInt(
            JSON.stringify(val).split("-")[2].slice(0, 2)
        ));
    });
    const date = new Date();
    const today = date.getDate();
    console.log(today);
    let newCal = [...m];
    // console.log(calContent);
    let thisMonth = false;
    newCal.map((w) =>
        w.map((d, i) => {
            // console.log(d);
            let bg = "";
            let e = calContent[0];
            let color = "dark";
            if (e === 1) thisMonth = !thisMonth;
            if (i >= 5) bg = "info";
            workedDays.map((thisDay) => {
                if (e === thisDay.dayNb && thisMonth && i >= 5)
                    return (bg = "warning");
                if (e === thisDay.dayNb && thisMonth) return (bg = "lime");
            });

            // console.log(e, thisMonth);
            if (!thisMonth) color = "muted";
            w[i] = { day: e, color, bg };
            calContent.shift();
        })
    );
</script>

<table
    class="mx-auto rounded border border-2 border-dark container table table-striped"
>
    <!-- {@debug flatList} -->
    <thead class="border-bottom border-2 border-dark">
        <tr class="py-3">
            {#each "lun mar mer jeu ven sam dim".split(" ") as day, i}
                <th class="text-center {i >= 5 && 'bg-info'}"
                    >{day.toUpperCase()}</th
                >
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each newCal as w, i}
            <tr>
                {#each w as { color, day, bg }, j}
                    <!-- {@debug i} -->
                    <td
                        class="text-{color} bg-{bg} {day == today &&
                            'border-2 shadow'}  {j >= 5 || day == 14
                            ? 'bg-info'
                            : ''} text-center"
                    >
                        <span class="px-2 py-1 ">
                            {day}
                        </span>
                        <!-- {i}<br />
                        {d}
                        {w[i] < [i - 1]} -->
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    .bg-lime {
        background: lime;
    }
</style>
