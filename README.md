<h1 align="center">Full-Stack To-Do List Application</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-Flask-blue.svg" alt="Made with Flask">
  <img src="https://img.shields.io/badge/Python-3.x-green.svg" alt="Python 3.x">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
</p>


<p align="center">
  <a href="#features">Features</a> •
  <a href="#technologies-used">Technologies Used</a> •
  <a href="#api-endpoints">API Endpoints</a> •
  <a href="#usage">Usage</a> •
</p>

---

## Features

- Add, view, update, and delete to-do items.
- Persistent storage using an in-memory list.
- Simple and intuitive user interface.

## Technologies Used

- **Backend**: Flask
- **Frontend**: HTML, CSS, JavaScript
- **Database**: SQLite (for demonstration purposes)
- **API Communication**: JSON

## API Endpoints

- **GET /gettodo**: Retrieves the list of to-do items.

- **POST /addtodo**: Adds a new to-do item.
  - Request Body:
    ```json
    {
        "task": "Your task",
        "status": "Pending"
    }
    ```

- **PUT /modtodo/int**: Updates an existing to-do item.
  - Request Body:
    ```json
    {
        "task": "Updated task",
        "status": "Completed"
    }
    ```

- **DELETE /deltodo/int**: Deletes a to-do item by ID.
## Usage

### Adding a To-Do Item

1. Enter the task and status in the input fields.
2. Click the "Add To-Do" button.

### Viewing To-Do Items

- The list of to-do items is displayed on the main page when you load the application.

### Updating a To-Do Item

1. Enter the ID of the to-do item you want to update.
2. Enter the new task and status.
3. Click the "Update To-Do" button.

### Deleting a To-Do Item

1. Enter the ID of the to-do item you want to delete.
2. Click the "Delete To-Do" button.

