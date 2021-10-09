const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'usando GET na rota users' 
  })
})

router.get('/:uid', (req, res) => {
  const uid = req.params.uid
  res.status(200).send({ message: 'usando GET na rota users uid',
  uid: uid
  })
})

router.post('/', (req, res) => {
  res.status(201).send({ message: 'usando POST na rota users' 
  })
})

router.put('/:uid', (req, res) => {
  const uid = req.params.uid
  res.status(200).send({ message: 'usando PUT na rota users uid',
  uid: uid
  })
})

router.delete('/:uid', (req, res) => {
  const uid = req.params.uid
  res.status(201).send({ message: 'usando DELETE na rota users uid',
  uid: uid
  })
})

module.exports = router;