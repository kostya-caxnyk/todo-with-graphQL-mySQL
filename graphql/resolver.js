const Todo = require('../models/todo');

module.exports = {
  async getTodos() {
    try {
      const todos = await Todo.findAll();
      return todos;
    } catch (e) {
      throw new Error('Fetch todos is not aVaIlAbLe');
    }
  },

  async createTodo({ todo: { name } }) {
    try {
    } catch (e) {
      throw new Error('cant create todo');
    }
    const todo = await Todo.create({ name, isDone: false });
    return todo;
  },

  async completeTodo({ id }) {
    try {
      const todo = await Todo.findByPk(id);
      todo.isDone = true;
      await todo.save();
      return todo;
    } catch (e) {
      throw new Error('cannot update todo')
    }
  },

  async deleteTodo({ id }) {
    try {
      const todo = await Todo.findByPk(id);
      await todo.destroy();
      return true;
    } catch (e) {
      throw new Error('cannot delete todo');
      return false;
    }
  },
};
