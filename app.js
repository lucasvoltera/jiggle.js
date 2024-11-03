

let state = reactive({message: 'hello world!'});


function renderApp() {
    render('#container', `<h1>${state.message}</h1>`);
}

renderApp()

const timeout = 2000; // 2 seconds
setTimeout(() => {
    state.message = 'Hello, universe!'
}, timeout);