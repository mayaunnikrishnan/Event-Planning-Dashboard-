# JavaScript Drag-and-Drop Task List

## Overview

This project demonstrates how to create a **drag-and-drop task list** using **JavaScript**. It covers essential techniques such as event data transfer, DOM manipulation, and template literals.

🔗 **Live Demo:** [JavaScript Drag-and-Drop Task List](https://journal-of-a-coder.github.io/Day-2-JavaScript-Drag-and-Drop-Task-List/)

---

## Study Notes

### 1. Event Data Transfer (for Drag-and-Drop)

#### `e.dataTransfer.setData()`

- Used to store data when a drag operation starts.
- In this case, the ID of the dragged element is stored.
- **Example:**
  ```js
  e.dataTransfer.setData('text/plain', e.target.id);
  ```

#### `e.dataTransfer.getData()`

- Retrieves the stored data during the drop event.
- **Example:**
  ```js
  const dragItemId = e.dataTransfer.getData('text/plain');
  ```

### 2. Setting Element Styles

- Used to manipulate the display of elements.
- **Example:**
  ```js
  taskDiv.style.display = 'none'; // Hide during drag
  taskDiv.style.display = 'block'; // Show after drag ends
  ```

### 3. Creating Unique IDs

- Generates a unique ID using the timestamp.
- **Example:**
  ```js
  taskDiv.id = `task-${Date.now()}`;
  ```

### 4. Template Literals

- Used for embedding variables inside strings using backticks.
- **Example:**
  ```js
  taskDiv.innerHTML = `<li>${newTask}</li>`;
  ```

### 5. Conditional Check

- Ensures that the input field is not empty before adding a new task.
- **Example:**
  ```js
  if (newTask) {
      // Add task logic here
  }
  ```

---

## Full Code Implementation

```js
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const newTask = document.getElementById('newTask').value;
    if (newTask) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'taskDiv';
        taskDiv.id = `task-${Date.now()}`;
        taskDiv.draggable = true;
        taskDiv.innerHTML = `<li>${newTask}</li>`;
        addEventDragger(taskDiv);
        taskList.appendChild(taskDiv);
        document.getElementById('newTask').value = '';
    }
});

function addEventDragger(taskDiv) {
    taskDiv.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => { taskDiv.style.display = 'none' }, 0);
    });

    taskDiv.addEventListener('dragend', () => {
        taskDiv.style.display = 'block';
    });
}

const pendingList = document.getElementById('pendingList');

pendingList.addEventListener('dragover', (e) => {
    e.preventDefault();
});

pendingList.addEventListener('drop', (e) => {
    e.preventDefault();
    const dragItemId = e.dataTransfer.getData('text/plain');
    const dragItem = document.getElementById(dragItemId);
    if (dragItem) {
        pendingList.appendChild(dragItem);
    }
});
```

---

## How It Works

1. **Adding Tasks:**

   - The user enters a task in the input field and clicks the "Add Task" button.
   - A new draggable task item is created and appended to the task list.

2. **Dragging and Dropping:**

   - Tasks can be dragged and dropped into the "Pending List" section.
   - The `dragstart` event stores the task ID.
   - The `drop` event retrieves the task ID and moves the task to the pending list.

3. **Styling Behavior:**

   - The task becomes temporarily invisible while dragging (`display = 'none'`).
   - Once dropped, the task reappears (`display = 'block'`).

---

## Features

✅ Dynamic task creation
✅ Drag-and-drop functionality
✅ Unique task IDs using `Date.now()`
✅ Clean and structured JavaScript implementation

---

## Next Steps

- Add a **delete task** feature.
- Implement a **completed tasks** section.
- Improve UI with **CSS styling**.

---

Enjoy coding! 🚀

