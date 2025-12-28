console.log("in script.js");
build();
function build(){
    for(j=0; j<DATASORTED.length; j++){
        tr = document.createElement("tr");
        for(i=0; i<5; i++){
            td = document.createElement("td");
            text = DATASORTED[j][i];
            if(text == "W"){
                th.innerHTML = "✅";
            } 
            else{
                th.innerHTML = text;
            }
            if(text == "L"){
                th.innerHTML = "❌";
            }
            tr.appendchild(td);
        }
        out.appendchild(row);
    }
}