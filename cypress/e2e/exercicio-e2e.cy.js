/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      cy.get('.icon-user-unfollow').click()
      cy.get('#username').type('rafael.teste@teste.com')
      cy.get('#password').type('ebac123!')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, rafael.teste (não é rafael.teste? Sair)')
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.product-block').eq(0).click()
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.input-text').clear().type(2)
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('contain' , '2 × “Abominable Hoodie” foram adicionados no seu carrinho.')
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.product-block').eq(1).click()
      cy.get('.button-variable-item-S').click()
      cy.get('.button-variable-item-Black').click()
      cy.get('.input-text').clear().type(1)
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('contain' , '“Aero Daily Fitness Tee” foi adicionado no seu carrinho.')
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.product-block').eq(2).click()
      cy.get('.button-variable-item-36').click()
      cy.get('.button-variable-item-Brown').click()
      cy.get('.input-text').clear().type(3)
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('contain' , '3 × “Aether Gym Pant” foram adicionados no seu carrinho.')
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.product-block').eq(3).click()
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.input-text').clear().type(1)
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('contain' , '“Ajax Full-Zip Sweatshirt” foi adicionado no seu carrinho.')
  });


})