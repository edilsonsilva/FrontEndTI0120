window.addEventListener("load",()=>{

    const container = document.getElementById("container");
    var estrutura = "<div id='listarProdutos'>";

    fetch("http://localhost:3350/produtos")
    .then((response)=>response.json())
    .then((dados)=>{

        dados.output.map((item)=>{
        estrutura += "<div id='produto'>";
        estrutura += "<div id='foto'><img src="+item.foto+"></div>";
        estrutura += "<div id='conteudo'>";
        estrutura += "<h2>"+item.nomeproduto+"</h2>";
        estrutura += "<p>"+item.preco+"</p>";
        estrutura += "</div>";
        estrutura += "</div>";
        });

        estrutura += "</div>";

        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao carregar produtos -> "+erro))

})