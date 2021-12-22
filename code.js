periodo = ()=>{
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();

    let periodo = (year - 2020)*2;
    if(month > 6){
        periodo += 1;
    }
    let ele = document.getElementById("periodo");
    ele.innerHTML = periodo;
}

window.addEventListener("load", periodo);

meLeva = (onde) => {
    // scroll
    if(screen.width < 640 ){
        if(onde == "sobre"){
            window.scrollTo(0, 764);
        }
        else if(onde == "projetos") {
            window.scrollTo(0, 1540);
        }
        else if(onde == "contato") {
            window.scrollTo(0, 2180);
        }
        document.getElementById("btnMobile").click();
    }else {
        document.getElementById(onde).scrollIntoView();
    }

    // active current nav-item
    let item = document.getElementsByClassName("nav-link");
    for(let i=0; i<4; i++){
        item[i].className = "nav-link";
    }
    for(let i=0; i<4; i++){
        if( (item[i].innerHTML).toUpperCase() === onde.toUpperCase()){
            item[i].className = "nav-link active";
            break;
        }
    }
}