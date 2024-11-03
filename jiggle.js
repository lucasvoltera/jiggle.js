const dependenciesMap = Map();
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

function createEffect(fn) {
    const effect = function effect(...args) {
    try {
        currentEffect = effect
        fn(...args)

    } finally {
        currentEffect = null
    }
}

function recordDependency(obj, key, effect) {
    let deps = dependenciesMap.get(obj)
    if (!deps) {
        deps = new Map()
        dependenciesMap.set(obj, deps)
    }

    let dep = deps.get(key)
    if (!dep) {
        dep = new Set()
        deps.set(key, dep)
    }

    deps.add(effect)
}

function track(obj, key) {
    if (currentEffect) {
        recordDependency(obj, key, currentEffect)
    }
}

function runEffects(dep) {
    const effectsToRun = new Set(dep)
    effectsToRun.forEach((effect) => 
        effect()
    )
}

function trigger(obj, key) {
    console.log('trigger', obj, key)
    const deps = dependenciesMap.get(obj)
    if (!deps) {
        return
    }

    const dep = deps.get(key)
    if (dep) {
        runEffects(dep)
    }

}



    

    return reactiveObj
}
