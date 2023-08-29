const Todo = require('./Todo');


exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                error: 'title or description is missing'
            });
        }

        const todo = await Todo.create(
            {
                title,
                description
            }
        );
        res.status(201).json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

exports.getTodos = async (req, res) => {
    try {
        // fetch data in descending order
        const todos = await Todo.find().sort({ _id: -1 });
        res.status(200).json({
            success: true,
            data: todos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}