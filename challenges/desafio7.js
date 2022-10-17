db.produtos.find({ $nor: [{ vendidos: 50 }, { tags: { $exists: true } }] },
  { nome: 1, vendidos: 1, _id: 0 });