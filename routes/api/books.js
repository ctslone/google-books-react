const router = require("express").Router();
const booksController = require("../../controller/booksController");

router.post("/test", (req, res) => {
    console.log("WORKING")
    booksController.test()
})

router.get("/", (req, res) => {
    // show all saved books
    booksController.getAllSavedBooks()
})

module.exports = router

// localhost:3001/api/books/...