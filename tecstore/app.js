const url = 'http://localhost:3000/produtos'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraProdutos(data));

 function mostraProdutos(produtos) {
    const htmlProdutos = produtos.map((produto) => `
      <div class="col">
        <div class="card">
          <img src="${produto.imagem}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${produto.descricao}</h5>
            <p class="card-text">O melhor teclado custo benefício.</p>
            <p class="card-text"><medium class="text-body-secondary">R$${produto.valor}</medium></p>
          </div>
        </div>
      </div>
    `);
  
    document.getElementById('app').innerHTML = htmlProdutos.join('');
  }