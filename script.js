console.log("in script.js");
build();
function build(){
    for(j=0; j<DATASORTED.length; j++){
        row = document.createElement("li");
        for(i=0; i<5; i++){
            th = document.createElement("th");
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
            row.appendchild(th);
        }
        out.appendchild(row);
    }
}