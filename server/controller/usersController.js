
const getAllUsers = (req, res) => {
    res.status(200).send({ message: 'usando GET na rota users' 
    })
  }


const getUserById = (req, res) => {
    const uid = req.params.uid
    res.status(200).send({ message: 'usando GET na rota users uid',
    uid: uid
    })
  }


const postUser = (req, res) => {
    res.status(201).send({ message: 'usando POST na rota users' 
    })
  }


const putUser = (req, res) => {
    const uid = req.params.uid
    res.status(200).send({ message: 'usando PUT na rota users uid',
    uid: uid
    })
  }


const deleteUser = (req, res) => {
    const uid = req.params.uid
    res.status(201).send({ message: 'usando DELETE na rota users uid',
    uid: uid
    })
  }

export default { getAllUsers, getUserById, postUser, putUser, deleteUser };