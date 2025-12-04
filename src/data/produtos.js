// src/data/produtos.js

export const categorias = ["Todos", "Bebidas", "Lanches", "Sobremesas"];

export const produtos = [
  {
    id: 1,
    nome: "Coca-Cola Zero Lata 350ml",
    descricao: "Refrigerante gelado, perfeito para acompanhar seu pedido.",
    preco: 6.0,
    categoria: "Bebidas",
    detalhes: ["Zero açúcar", "Com cafeína", "350ml", "Contém lactose"],
    imagem:
      "https://cdn.pixabay.com/photo/2016/11/08/05/26/coca-cola-1809428_1280.jpg ",
  },
  {
    id: 2,
    nome: "Hambúrguer da Casa",
    descricao: "Pão artesanal, carne 150g, queijo, salada e molho especial.",
    preco: 24.9,
    categoria: "Lanches",
    detalhes: ["Contém lactose", "Carne 150g", "Molho especial"],

    imagem:
      "https://www.coca-cola.com/br/pt/brands/coca-cola",
  },
  {
    id: 3,
    nome: "Batata Frita Média",
    descricao: "Porção de batata frita crocante.",
    preco: 14.0,
    categoria: "Lanches",
    detalhes: ["Serve 2 pessoas", "Sem glúten", "Sem lactose"],

    imagem:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    nome: "Sorvete de Chocolate",
    descricao: "Taça com 2 bolas de sorvete de chocolate.",
    preco: 12.5,
    categoria: "Sobremesas",
    detalhes: ["Contém lactose", "2 bolas", "Cobertura inclusa"],

    imagem:
      "https://images.unsplash.com/photo-1542822038-3a1810a5c9b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    nome: "Fatia de bolo de chocola com cenoura ",
    descricao: "Fatia de bolo",
    preco: 25.50,
    categoria: "Sobremesas",
    detalhes: ["Contém lactose", "Uma fatia", "Cobertura inclusa"],

    imagem:
      "https://images.unsplash.com/photo-1542822038-3a1810a5c9b8?auto=format&fit=crop&w=800&q=80",
  },
];
