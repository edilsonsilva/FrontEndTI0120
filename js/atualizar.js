const btnAtualizar = document.getElementById("btnAtualizar");

window.addEventListener("load",()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    fetch("http://localhost:3350/produtos/"+id)
    .then((response)=>response.json())
    .then((rs)=>{
        document.getElementById("nomeproduto").value=rs.output.nomeproduto;
        document.getElementById("preco").value=rs.output.preco;
        document.getElementById("descricao").value=rs.output.descricao;
        document.getElementById("foto").value=rs.output.foto;
    })
    .catch((erro)=>console.error("Erro ao tentar carregar os dados -> "+erro))
});

btnAtualizar.onclick = ()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    const nome = document.getElementById("nomeproduto");
    const preco = document.getElementById("preco");
    const descricao = document.getElementById("descricao");
    const foto = document.getElementById("foto");

    fetch("http://localhost:3350/atualizar/"+id,{
        method:"PUT",
            headers:{
                accept:"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                nomeproduto:nome.value,
                preco:preco.value,
                descricao:descricao.value,
                foto:foto.value
            })
    })
    .then((response)=>response.json())
    .then((rs)=>{
        alert(rs.output);
        nome.value = "";
        preco.value ="";
        descricao.value = "";
        foto.value = ""
    })
    .catch((erro)=>console.log("Erro ao tentar atualizar o produto -> "+erro))

}