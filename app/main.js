const loadInitialTemplate =() => {
    const template = `
    <h1>Usuarios</h1>
    <form id="user-form">
    <div>
    <label>Nombre</label>
    <input name="name" />
    </div>
    <div>
    <label>Apellido</label>
    <input name="lastname" />
    </div>
    <button type="submit">Enviar</button>
    </form> 
    <ul id="user-list"></ul>   `
    const body = document.getElementsByTagName('body')[0] //Con getElementByTagname buscamos por etiquetas
    body.innerHTML = template
}

const addFormListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onSubmit = async (e) => {
        e.preventDefault()
        const FormData = new FormData(userForm.getAnimations('name'))
        const data = Object.fromEntries(form.Data.entries())  //un objeto que cuente con la condicion de ser un literal
    }
}

window.onload = () => {
    loadInitialTemplate()
    addFormListener
}

