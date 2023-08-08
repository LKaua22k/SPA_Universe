export class Routers {
    routes = {}

    add(routerName, page){
        this.routes[routerName] = page
    }

    route(event){
        event = event || window.event

        event.preventDefault()

        window.history.pushState({},"", event.target.href)

        if(window.location.pathname == '/universo'){
         document.body.style.backgroundImage = 'url(./imgs/mountains-universe-2.png)'
        } else if(window.location.pathname == '/exploracao'){
            document.body.style.backgroundImage = 'url(./imgs/mountains-universe-3.png)'
        } else {
            'url(./imgs/mountains-universe-1.png)'
        }


        this.handle()    
    }

    handle(){

        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]
        
        fetch(route).then(data => data.text()).then(html => {
            document.getElementById("#app").innerHTML = html
        })
        
        console.log(pathname)
    }
}