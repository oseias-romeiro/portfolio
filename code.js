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
    if(onde == "sobre"){
        window.scrollTo(0, 764);
    }
    else if(onde == "projetos") {
        window.scrollTo(0, 1540);
    }
    else if(onde == "contato") {
        window.scrollTo(0, 2180);
    }
    if(screen.width < 900 ){
        document.getElementById("btnMobile").click();
    }
}