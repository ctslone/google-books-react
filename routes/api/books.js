const router = require("express").Router();
const booksController = require("../../controller/booksController");

router.post("/test", (req, res) => {
    console.log("WORKING")
    booksController.test()
})

module.exports = router

// localhost:3001/api/books/...