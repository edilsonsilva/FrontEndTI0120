window.addEventListener("load",()=>{
    
    const container = document.getElementById("container");

    var estrutura = "";

    fetch("http://localhost:3350/produtos")
    .then((response)=>response.json())
    .then((rs)=>{
        rs.output.map((item)=>{
            estrutura+="<div id='linha'>";
            estrutura+="<div id='foto'><img src="+item.foto+"></div>";
            estrutura+="<div id='nome'>"+item.nomeproduto+"</div>";
            estrutura+="<div id='preco'>"+item.preco+"</div>";
           
           
            estrutura+="<div id='atualizar'><a href=atualizar.html?"+item._id+">Atualizar</a></div>";
           
           
            estrutura+="<div id='apagar'><a href=apagar.html?"+item._id+">Apagar</a></div>";
           
           
            estrutura+="</div>";
        })
        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao tentar listar os produtos -> "+erro));

});