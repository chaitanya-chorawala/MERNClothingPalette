const express = require("express");
const router = express.Router();

const ProductController = require("../Controllers/ProductController");

router.get("/", ProductController.List);
router.get("/Search", ProductController.Search);
router.post("/Add", ProductController.Add);
router.put("/Update", ProductController.Update);
router.delete("/Delete/:id", ProductController.Delete);

module.exports = router;
