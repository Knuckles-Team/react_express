const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a transaction

app.post("/transactions", async (req, res) => {
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

app.get("/transactions", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM transactions");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/transactions/:id", async (req, res) => {
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

app.put("/transactions/:id", async (req, res) => {
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

app.delete("/transactions/:id", async (req, res) => {
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

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

export {};