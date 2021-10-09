const { Router } = require('express');
const {
  getAllUsers, getUser, postUser, putUser, deleteUser,
} = require('../controller/usersController');

const router = Router();

router.get('/', getAllUsers);
router.post('/', postUser);

router.get('/:userid', getUser);
router.put('/:userid', putUser);
router.delete('/:userid', deleteUser);

module.exports = router;