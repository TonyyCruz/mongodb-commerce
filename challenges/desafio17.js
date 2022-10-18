const totalProdutos = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos });

db.resumoProdutos.find({}, { franquia: 1, totalProdutos: 1, _id: 0 });