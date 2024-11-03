

function render(element, content) {
    const app = document.querySelector(element);

    if (app !== null) {
        app.innerHTML = content;
    }

}


function reactive(obj) {

    const keys = Object.keys(obj)

    const reactiveObj = {}

    keys.forEach((key) => {
        let value = obj[key]

        
        Object.defineProperty(reactiveObj, key, {
            get() {
                console.log('get', key, value)
                return value
            },
            set(newValue) {
                console.log('set', key, newValue)
                value = newValue
                renderApp()                
            }
        })
    }
)

    

    return reactiveObj
}
