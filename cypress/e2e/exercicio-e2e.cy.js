/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page"


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/minha-conta')
      cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
      })
      cy.visit('/produtos')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
    cy.fixture('produtos').then(dados => {
      produtosPage.buscarProduto(dados[0].nomeProduto)
      produtosPage.addProdutoCarrinho(
        dados[0].tamanho,
        dados[0].cor,
        dados[0].quantidade)
      cy.get('.woocommerce-message').should('contain' , dados[0].nomeProduto)
    })
    cy.fixture('produtos').then(dados => {
      produtosPage.buscarProduto(dados[1].nomeProduto)
      produtosPage.addProdutoCarrinho(
        dados[1].tamanho,
        dados[1].cor,
        dados[1].quantidade)
      cy.get('.woocommerce-message').should('contain' , dados[1].nomeProduto)
    })
    cy.fixture('produtos').then(dados => {
      produtosPage.buscarProduto(dados[2].nomeProduto)
      produtosPage.addProdutoCarrinho(
        dados[2].tamanho,
        dados[2].cor,
        dados[2].quantidade)
      cy.get('.woocommerce-message').should('contain' , dados[2].nomeProduto)
    })
    cy.fixture('produtos').then(dados => {
      produtosPage.buscarProduto(dados[3].nomeProduto)
      produtosPage.addProdutoCarrinho(
        dados[3].tamanho,
        dados[3].cor,
        dados[3].quantidade)
      cy.get('.woocommerce-message').should('contain' , dados[3].nomeProduto)
    })

    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#terms').click()
    cy.get('#place_order').click( {force:true} )
    cy.get('.page-title', { timeout: 15000 }).should('be.visible').and('contain', 'Pedido recebido')
  });
})