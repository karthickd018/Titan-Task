// script.js
document.getElementById('add-btn').addEventListener('click', function() {
  const input = document.getElementById('todo-input');
  const taskText = input.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    document.getElementById('todo-list').appendChild(listItem);

    input.value = ''; // Clear input field after adding
  }
});
