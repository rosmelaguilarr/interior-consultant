const d = document,
    $menuHamburguer = d.querySelector(".menu-hamburguer"),
    $menu = d.querySelector(".menu");

d.addEventListener("click", e => {
    // ########## MOSTRAR/OCULTAR MENU EN MOVIL ##########
    if (e.target.matches(".menu-hamburguer")) {
        $menu.classList.toggle("menu--visible");
        
        if($menu.classList.contains("menu--visible")){
            e.target.setAttribute("src", "img/close.svg");
        } else {
            e.target.setAttribute("src", "img/hamburguer.svg");
        }
    }
    // ########## OCULTAR MENU EN MOVIL CON CLICK EN CUALQUIER PARTE DE LA PANTALLA EXCEPTO EN LOS ENLACES##########
    if($menu.classList.contains("menu--visible")){
        if (e.target.matches(".menu") && !e.target.matches(".menu__link")) {
            $menu.classList.remove("menu--visible");
            $menuHamburguer.setAttribute("src", "img/hamburguer.svg");
        }
    }
})