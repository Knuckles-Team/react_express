const express_instance = require("express");
const app_express = express_instance();
const cors_instance = require("cors");
const db_pool = require("./db");

//middleware
app_express.use(cors());
app_express.use(express.json()); //req.body

//ROUTES//

//create a transaction

app_express.post("/transactions", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO transaction (user) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app_express.get("/transactions", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM transactions");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app_express.get("/transactions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM transactions WHERE txId = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app_express.put("/transactions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE transactions SET user = $1 WHERE txId = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app_express.delete("/transactions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM transactions WHERE txId = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app_express.listen(5000, () => {
  console.log("server has started on port 5000");
});
