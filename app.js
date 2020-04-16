const search = new URLSearchParams(window.location.search)
const user_id = search.get('user_id')
const loginForm = document.getElementById('login')
loginForm.action = `http://localhost:3001/origami.html`

const newUserForm = document.getElementById('create-user')
newUserForm.action = `http://localhost:3001/origami.html`
    