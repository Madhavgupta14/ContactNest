const express = require('express');
const router = express.Router();
const { getContacts , createContact , getContact , UpdateContacts , DeleteContacts } = require('../Controllers/contactController');

router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(UpdateContacts).delete(DeleteContacts);

module.exports = router;