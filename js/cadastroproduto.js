const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const nome = document.getElementById("nomeproduto");
    const preco = document.getElementById("preco");
    const foto = document.getElementById("foto");
    const descricao = document.getElementById("descricao");

    fetch("http://localhost:3350/produto/cadastro",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeproduto:nome.value,
            preco:preco.value,
            foto:foto.value,
            descricao:descricao.value
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Produto cadastrado com sucesso!");
    nome.value = "";
    preco.value = "";
    foto.value = "";
    descricao.value = ""
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar -> "+erro));
}