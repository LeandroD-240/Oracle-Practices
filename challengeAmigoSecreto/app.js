// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

function agregarAmigo() {
    let addfriend = document.getElementById("amigo").value;
    //addition = document.getElementById("listaAmigos").innerText = addfriend;
    if (addfriend == "") {
        alert("Please, put a name");
    } else {
        friends.push(addfriend);
        document.getElementById("amigo").value = "";
        //document.getElementById("listaAmigos").innerHTML = friends;
    }
}