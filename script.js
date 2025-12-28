console.log("in script.js");
WIDTH = 5;
build();
function build(){
    row = document.createElement("tr");
    for(i=0; i<WIDTH; i++){
        tableHead = document.createElement("th");
        tableHead.innerHTML = DATASORTED[0][i];
        row.appendchild(tableHead);
    }
    out.appendchild(row);
    for(j=1; j<DATASORTED.length; j++){
        row = document.createElement("tr");
        for(i=0; i<WIDTH; i++){
            td = document.createElement("td");
            text = DATASORTED[j][i];
            if(text == "W"){
                td.innerHTML = "✅";
            } 
            else{
                td.innerHTML = text;
            }
            if(text == "L"){
                td.innerHTML = "❌";
            }
            row.appendchild(td);
        }
        out.appendchild(row);
    }
}