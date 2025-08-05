document.getElementById('add-btn').addEventListener('click', function () {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Toggle complete on click
  listItem.addEventListener('click', function () {
    listItem.classList.toggle('completed');
  });

  // Create delete button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent triggering complete toggle
    listItem.remove();
  });

  listItem.appendChild(removeBtn);
  document.getElementById('task-list').appendChild(listItem);

  input.value = '';
});
