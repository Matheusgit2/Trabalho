function adicionarAoCarrinho(produto) {
    alert(produto + " foi adicionado ao seu carrinho!");
}
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(produto + " foi adicionado ao seu carrinho!");
}