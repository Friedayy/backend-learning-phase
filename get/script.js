const usersButton = document.querySelector(".users");
const usersDiv = document.querySelector("#usersDiv");

usersButton.addEventListener("click", async ()=> {
    try {
        const response = await fetch("http://127.0.0.1:5000/users");
        if(!response.ok){
            throw new Error("failed to get users");
        };
        const users = await response.json();
        usersDiv.innerHTML = "";
        users.forEach(user => {
           usersDiv.innerHTML +=`
           <div>
             <h3>${user.id}.${user.name}</h3>
             <p>${user.email}</p>
            </div> 
           `;
        });
    } catch (error) {
        usersDiv.innerHTML = "Something went wrong";
        console.log(error);
        
    };
});