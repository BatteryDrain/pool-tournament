console.log("in script.js");
WIDTH = 5;
build();
function build() {
    let row = document.createElement("tr");

    for (i = 0; i < 5; i++) {
        let tableHead = document.createElement("th");
        tableHead.textContent = DATASORTED[1][i];
        row.appendChild(tableHead);
    }
    out.appendChild(row);

    for (j = 2; j < DATASORTED.length + 1; j++) {
        row = document.createElement("tr");
        for (i = 0; i < DATASORTED[j].length; i++) {
            let td = document.createElement("td");
            let text = DATASORTED[j][i];
            if(text == "W" || text == "L") {
                temp = "";
                for(index=0; index<5; index++){
                    text = DATASORTED[j][index];
                    if (text == "W") {
                        temp = temp + "✅";
                    } else if (text == "L") {
                        temp = temp + "❌";
                    } else if (text == ""){
                        temp = temp + "NA";
                    }
                }
                td.textContent = temp;
            } else {
                td.textContent = text;
            }

            row.appendChild(td);
        }
        out.appendChild(row);
    }
}
