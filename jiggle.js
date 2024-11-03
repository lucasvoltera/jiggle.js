const depsMap = Map();
let currentEffect = null;

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
                track(reactiveObj, key)
                return value
            },
            set(newValue) {
                console.log('set', key, newValue)
                if (value !== newValue) {
                    value = newValue
                    trigger(reactiveObj, key)
                    renderApp()
                }
            }
        })
    }
)

function track(obj, key) {
    console.log('track', obj, key)
}

function trigger(obj, key) {
    console.log('trigger', obj, key)
}



    

    return reactiveObj
}
