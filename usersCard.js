fetch("https://reqres.in/api/users")
.then((res) => res.json())
.then((userArray) => createUserCard(userArray.data))

const createUserCard = (users) => {
    console.log(users)
    let root = document.getElementById('root')
    root.innerHTML = ""
    let usersList = ""
    users.forEach((user) => {
        usersList += `
            <div>
                <img src="${user.avatar}" alt="User Image"/>
                <h3 class="txt">User Id : ${user.id} </h3>
                <p class="txt">Name :${user.first_name} ${user.last_name} </p>
                <p class="txt">Email: ${user.email}</p>
            </div>
        `
    })
    console.log(usersList)
    root.innerHTML = usersList
}