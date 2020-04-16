const search = new URLSearchParams(window.location.search)
const id = search.get('user_id')

fetch(`http://localhost:3000/users/${id}`)
.then(response => response.json())
.then(user => profileLink(user))