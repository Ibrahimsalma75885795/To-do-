document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get user input
  const taskInput = document.getElementById('taskInput').value;
  const timeInput = document.getElementById('timeInput').value;

  // Create a new task item
  const taskListItem = document.createElement('li');

  // Add checkbox for completion
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create the label for task
  const taskLabel = document.createElement('label');
  taskLabel.textContent = taskInput;

  // Display the time
  const timeLabel = document.createElement('span');
  timeLabel.className = 'todo-time';
  timeLabel.textContent = ` (Time: ${timeInput})`;

  // Append the elements
  taskListItem.appendChild(checkbox);
  taskListItem.appendChild(taskLabel);
  taskListItem.appendChild(timeLabel);

  // Add the new task to the list
  document.getElementById('todoList').appendChild(taskListItem);

  // Clear the form fields
  document.getElementById('taskInput').value = '';
  document.getElementById('timeInput').value = '';
});
