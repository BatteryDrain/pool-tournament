console.log("in script.js");
build();
function build(){
    for(j=0; j<DATASORTED.length; j++){
        tr = document.createElement("tr");
        for(i=0; i<5; i++){
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
            tr.appendchild(td);
        }
        out.appendchild(tr);
    }
}