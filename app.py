from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# In-memory storage for to-do items
to = [
    {'id': 1, 'task': 'Complete assignment', 'status': 'Pending'},
    {'id': 2, 'task': 'Buy groceries', 'status': 'Completed'},
    {'id': 3, 'task': 'Prepare for meeting', 'status': 'Pending'},
    {'id': 4, 'task': 'Clean the house', 'status': 'In Progress'}
]

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/gettodo', methods=['GET'])
def gettodo():
    return jsonify(to)

@app.route('/addtodo', methods=['POST'])
def addtodo():
    data = request.get_json()
    print('Received data for new todo:', data)
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    todo = {
        'id': len(to) + 1,  # Accepts id from request or assigns a new id
        'task': data.get('task'),
        'status': data.get('status', 'Pending')  # Default status to 'Pending' if not provided
    }
    to.append(todo)
    return jsonify(todo), 200


@app.route('/deltodo/<int:id>', methods=['DELETE'])
def deltodo(id):
    global to  # Declare that we're modifying the global list
    to = [item for item in to if item['id'] != id]
    return jsonify("Deleted Successfully!"), 200


@app.route('/modtodo/<int:id>', methods=['PUT'])
def modtodo(id):
    data = request.get_json()
    print('Received data for update:', data)
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    todo = next((item for item in to if item['id'] == id), None)
    if not todo:
        return jsonify({'error': 'Todo not found'}), 404
    todo['task'] = data.get('task', todo['task'])
    todo['status'] = data.get('status', todo['status'])
    return jsonify(todo)


if __name__ == '__main__':
    app.run(debug=True)
