const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const addUsers = document.querySelector("#addUsers");

const button = document.querySelector(".button");
const usersDiv = document.querySelector("#users");

addUsers.addEventListener("click", async ()=> {
    const name = nameInput.value;
    const email = emailInput.value;
    
    const newUser = {
        name,
        email,
    };
    try {
        const response = await fetch("http://127.0.0.1:5000/users", {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        });
        const user = await response.json();
        console.log("Created user:", user);
        nameInput.value = "";
        emailInput.value = "";

        alert("User added!");
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
})

button.addEventListener("click", async  ()=> {
    try {
        const response = await fetch("http://127.0.0.1:5000/users");
        if(!response.ok){
            throw new Error("failed to fetch users")
        }
        const users = await response.json();
        usersDiv.innerHTML = "";
        users.forEach(user => {
            usersDiv.innerHTML += `
            <div>
              <h3>${user.name}</h3>
              <p>${user.email}</p>
            </div>
            `;
        });
    } catch (error) {
        usersDiv.innerHTML = "Something went wrong!"
        console.log(error);
    }
});

