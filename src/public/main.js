const socket = io();
const info = document.getElementById("info");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    socket.emit("data", {
        name: e.target.name.value,
        surname: e.target.surname.value,
    });
    e.target.name.value = "";
    e.target.surname.value = "";
});

const addChat = (name, note) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="card">
        <div class="card-body">
            <h3>${name}</h3>
            <p>${note}</p>
            <button class="delete btn btn-danger" data-id="${name}">eliminar</button>
        </div>
    </div>
    `;
    const btn = div.querySelector(".delete");
    div.addEventListener("click", (e) => {
        socket.emit("delete", btn.dataset.id);
        socket.on("delete", (data) => {
            info.innerHTML = "";
            data.forEach((el) => {
                info.append(addChat(el.name, el.surname));
            });
        });
    });

    return div;
};

socket.on("array", (data) => {
    info.innerHTML = "";
    data.forEach((el) => {
        info.append(addChat(el.name, el.surname));
    });
});

socket.on("data", (data) => {
    info.append(addChat(data.name, data.surname));
});
