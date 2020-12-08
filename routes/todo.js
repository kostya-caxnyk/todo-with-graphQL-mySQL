const { Router } = require('express');
const Todo = require('../models/todo');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json({ todos });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const todo = await Todo.create({ name, isDone: false });
    res.status(201).json({ todo });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id);
    todo.isDone = true;
    await todo.save();
    console.log(todo);
    res.status(200).json(todo);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: {
        id: +req.params.id,
      },
    });
    await todos[0].destroy();
    res.status(204).json({});
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
