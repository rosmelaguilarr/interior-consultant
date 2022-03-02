const d = document,
    $menuHamburguer = d.querySelector(".menu-hamburguere"),
    $menu = d.querySelector(".menu");

d.addEventListener("click", e => {
    if (e.target.matches(".menu-hamburguer")) {
        $menu.classList.toggle("menu--visible");
        
        if($menu.classList.contains("menu--visible")){
            e.target.setAttribute("src", "img/close.svg");
        } else {
            e.target.setAttribute("src", "img/hamburguer.svg");
        }
    }
})