const botao = document.querySelector("#buscarUsuarios");
const resultado = document.querySelector("#resultado");
const idUsuario = document.querySelector("#idUsuario")

botao.addEventListener("click", async () =>{

    const id = idUsuario.value;

    if (id === ''){
        resultado.innerHTML = 'Digite um ID';
        return;
    }
    if (id > 10 || id <= 0){
        resultado.innerHTML = 'Digite um ID válido';
        return;
    }
    
    try{
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const dados = await resposta.json();
        resultado.innerHTML = `
        <p> ID: ${dados.id} </p>
        <p> Nome: ${dados.name} </p>
        <p> Email: ${dados.email} </p>
        <p> Cidade: ${dados.address.city} </p>
        <p> Telefone: ${dados.phone} </p>
        `;
    }catch(erro){
        console.log("Erro: ", erro)
    }

})