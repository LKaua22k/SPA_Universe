import { Routers } from "./route.js";

const routers = new Routers()

routers.add("/","./pages/home.html")
routers.add("/universo","./pages/universe.html")
routers.add("/exploracao","./pages/exploracao.html")
// routers.add("/404","./pages/404.html")

routers.handle()

window.onpopstate = () => routers.handle()
window.route = () => routers.route()