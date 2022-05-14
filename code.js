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
    let btnsMenus = document.getElementsByTagName("button");
    let btnsLink = document.getElementsByTagName("a");

    // standard class buttons
    btnsMenus[1].className = "nav-link";
    btnsMenus[2].className = "nav-link";
    btnsMenus[3].className = "nav-link";
    btnsLink[1].className = "nav-link";

    // standard style buttons
    btnsMenus[1].style = "";
    btnsMenus[2].style = "";
    btnsMenus[3].style = "";
    btnsLink[1].style = "";



    // scroll
    if(onde == "sobre"){
        btnsMenus[1].className = "nav-link active";
        btnsMenus[1].style = "text-decoration: underline;";
        window.scrollTo(0, 764);
    }
    else if(onde == "projetos") {
        btnsMenus[2].className = "nav-link active";
        btnsMenus[2].style = "text-decoration: underline;";
        window.scrollTo(0, 1540);
    }
    else if(onde == "contato") {
        btnsMenus[3].className = "nav-link active";
        btnsMenus[3].style = "text-decoration: underline;";
        window.scrollTo(0, 2180);
    }
    else if(onde == "home") {
        btnsLink[1].className = "nav-link active";
        btnsLink[1].style = "text-decoration: underline;";
        window.scrollTo(0, 2180);
    }
    if(screen.width < 900 ){
        document.getElementById("btnMobile").click();
    }
}