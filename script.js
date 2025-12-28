console.log("in script.js");
WIDTH = 4;
build();

function build() {
    let row = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
        let th = document.createElement("th");
        th.textContent = DATASORTED[1][i];
        row.appendChild(th);
    }
    out.appendChild(row);

    for (let j = 2; j < DATASORTED.length; j++) {
        row = document.createElement("tr");

        for (let i = 0; i < WIDTH; i++) {
            let td = document.createElement("td");
            td.textContent = DATASORTED[j][i];
            row.appendChild(td);
        }

        let td = document.createElement("td");
        let temp = "";

        for (let k = 0; k < WIDTH; k++) {
            let val = DATASORTED[j][3 + k];
            console.log(val);
            if (val === "W") temp += " ✅";
            else if (val === "L") temp += " ❌";
            else temp += " NA";
        }

        td.textContent = temp;
        row.appendChild(td);

        out.appendChild(row);
    }
}

