

var ListaDeTarefas = [];

let lista = document.getElementById("list");

let adicionar = document.getElementsByClassName("plus-btn")[0];

let limparTudo = document.getElementsByClassName("trash-btn")[0];


function add(){
    let itemsText = document.getElementById("itemsText");
    items = itemsText.value;
    ListaDeTarefas.push(items);

    let itemList = document.createElement("li");
    itemList.innerText = items;
    lista.appendChild(itemList);
    
    let string = JSON.stringify(ListaDeTarefas);
    localStorage.setItem("savedItems", string);
    itemsText.value = "";
}

function clear(){

    lista.innerHTML = "";
    localStorage.clear()
    
}

adicionar.addEventListener("click", add)
limparTudo.addEventListener("click", clear)

onload = function(){
    if (localStorage.getItem("savedItems") != null) {
            li = localStorage.getItem("savedItems");
            ListaDeTarefas = JSON.parse(li);
    
            for (var i = 0; i < ListaDeTarefas.length; i++){
                let itemList = document.createElement("li");
                itemList.innerText = ListaDeTarefas[i];
                lista.appendChild(itemList);
            }
    }
}

// =============================================== //

let checkItem = (e) =>{
        if (e.target.tagName == "LI") {
            e.target.classList.toggle("done");
        }
    
    }

lista.addEventListener("click", checkItem);


