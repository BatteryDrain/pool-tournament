console.log("in script.js");
WIDTH = 8;
build();
function build() {
    let row = document.createElement("tr");

    for (i = 0; i < 5; i++) {
        let tableHead = document.createElement("th");
        tableHead.textContent = DATASORTED[0][i];
        row.appendChild(tableHead);
    }
    out.appendChild(row);

    for (j = 1; j < DATASORTED.length-1; j++) {
        row = document.createElement("tr");

        for (i = 0; i < DATASORTED[j].length; i++) {
            let td = document.createElement("td");
            let text = DATASORTED[j][i];

            if (text === "W") {
                td.textContent = "✅";
            } else if (text === "L") {
                td.textContent = "❌";
            } else if (text === ""){
                td.innerHTML = "no data";
            }else {
                td.textContent = text;
            }

            row.appendChild(td);
        }
        out.appendChild(row);
    }
}
