// @ts-nocheck
import React from "react";
import TodoListInterface from "../../src/components/TodoListInterface";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<TodoListInterface />);
  cy.get('[data-testid="todoListapp"]').as('todos');
});

describe('TodoListInterface.cy.tsx', () => {
  it('Should have a data-testid of todoListapp', () => {
    cy.get('@todos').should('exist');
  });
  it('Should contain two children', ()=>{
    cy.get('@todos').children('.todo-page-elems').should('have.length', 2);
  });
  it('Should contain a header with #todo-heading', ()=>{
    cy.get('@todos').children('.todo-page-elems').eq(0).should('have.id', 'todo-heading');
  });
  it('main should have two sections with .main-todo', ()=>{
    cy.get('@todos').children('.todo-page-elems').eq(1).children('.main-todo').should('have.length', 2);
  });
})