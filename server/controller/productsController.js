
const getAllProducts = (req, res) => {
  res.status(200).send({ message: 'usando GET na rota products' 
  })
}


const getProductById = (req, res) => {
  const id = req.params.productid
  res.status(200).send({ message: 'usando GET na rota products id',
  id: id
  })
}


const postProduct = (req, res) => {
  res.status(201).send({ message: 'usando POST na rota products' 
  })
}


const putProduct = (req, res) => {
  const id = req.params.productid
  res.status(200).send({ message: 'usando PUT na rota products id',
  id: id
  })
}


const deleteProduct = (req, res) => {
  const id = req.params.productid
  res.status(201).send({ message: 'usando DELETE na rota products id',
  id: id
  })
}

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};