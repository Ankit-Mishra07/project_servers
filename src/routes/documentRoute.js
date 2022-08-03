const express = require('express');
const { createDocument, findDocument, getAllDocument, UpdateDocument, DeleteDocument } = require('../controllers/document.controller');
const router = express.Router();

//create
router.route("/create").post(createDocument);

//get document
router.route("/getone/:id").get(findDocument);

//get All document
router.route("/getall").get(getAllDocument);

// update document
router.route("/update/:id").patch(UpdateDocument)

// DeleteDocument
router.route("/delete/:id").delete(DeleteDocument)
module.exports = router;