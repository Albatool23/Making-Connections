console.log("page loaded...");


function remove(e){

    document.getElementsByClassName("icon")
    e.parentElement.parentElement.remove()
    
}


function Change(e){
    var any;
    
    any =  e.parentElement.querySelector("h1")
    any.innerText = "albatool"

}