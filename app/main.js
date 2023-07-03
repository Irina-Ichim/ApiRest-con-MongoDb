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
}

window.onload = () => {
    loadInitialTemplate()
}