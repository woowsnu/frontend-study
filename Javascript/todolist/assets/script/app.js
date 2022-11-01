(function () {
  'use strict';

  const get = (target) => {
    return document.querySelector(target);
  };

  const $todos = get('.todo-list-area');
  const $form = get('.add-todo-area');
  const $todoInput = get('.todo-input');
  const API_URL = 'http://localhost:3500/todos';

  const createTodoElement = (item) => {
    const { id, content, completed } = item;
    const isCompleted = completed ? 'checked' : '';
    const $todoItem = document.createElement('div');
    $todoItem.classList.add('item');
    $todoItem.dataset.id = id;
    $todoItem.innerHTML = `
              <div class="content">
                <input
                  type="checkbox"
                  class='todo_checkbox' 
                  ${isCompleted}
                />
                <label>${content}</label>
                <input type="text" value="${content}" />
              </div>
              <div class="item_buttons content_buttons">
                <button class="todo_edit_button">
                  <i class="far fa-edit"></i>
                </button>
                <button class="todo_remove_button">
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
              <div class="item_buttons edit_buttons">
                <button class="todo_edit_confirm_button">
                  <i class="fas fa-check"></i>
                </button>
                <button class="todo_edit_cancel_button">
                  <i class="fas fa-times"></i>
                </button>
              </div>
        `;
    return $todoItem;
  };

  const renderAllTodos = (todos) => {
    $todos.innerHTML = '';
    todos.forEach((todo) => {
      const todoElement = createTodoElement(todo);
      $todos.appendChild(todoElement);
    });
  };

  const getTodos = () => {
    fetch(API_URL)
      .then((Response) => Response.json())
      .then((todos) => renderAllTodos(todos))
      .catch((error) => console.log(error));
  };

  const addTodo = (e) => {
    e.preventDefault();

    const todo = {
      content: $todoInput.value,
      completed: false,
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then(getTodos)
      .then(() => {
        $todoInput.value = '';
        $todoInput.focus();
      })
      .catch((error) => console.error(error));
  };

  // checkbox
  const toggleTodo = (e) => {
    if (e.target.className !== 'todo_checkbox') {
      return;
    }
    const $item = e.target.closest('.item');
    const id = $item.dataset.id;
    const completed = e.target.checked;
    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    }).catch((error) => console.error(error));
  };

  const changeEditMode = (e) => {
    const $item = e.target.closest('.item');
    const $label = $item.querySelector('label');
    const $editInput = $item.querySelector('input[type="text"]');
    const $contentBtn = $item.querySelector('.content_buttons');
    const $editBtn = $item.querySelector('.edit_buttons');
    const value = $editInput.value;

    if (e.target.className === 'todo_edit_button') {
      $label.style.display = 'none';
      $editInput.style.display = 'block';
      $contentBtn.style.display = 'none';
      $editBtn.style.display = 'block';
      $editInput.focus();
      $editInput.value = '';
      $editInput.value = value;
    }

    if (e.target.className === 'todo_edit_cancel_button') {
      $label.style.display = 'block';
      $editInput.style.display = 'none';
      $contentBtn.style.display = 'block';
      $editBtn.style.display = 'none';
      $editInput.value = $label.innerText;
    }
  };

  const editTodo = (e) => {
    if (e.target.className !== 'todo_edit_confirm_button') return;
    const $item = e.target.closest('.item');
    const id = $item.dataset.id;
    const $editInput = $item.querySelector('input[type="text"]');
    const content = $editInput.value;

    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
  };

  const deleteTodo = (e) => {
    if (e.target.className !== 'todo_remove_button') return;
    const $item = e.target.closest('.item');
    const id = $item.dataset.id;
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    }).catch((e) => console.error(e));
  };

  const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
      getTodos(); //html이 전부 불러와지고 분석이 되었을 때 getTodos 함수가 실행하면서 데이터를 불러올 수 있게하는 부분
    });
    $form.addEventListener('submit', addTodo);
    $todos.addEventListener('click', toggleTodo);
    $todos.addEventListener('click', changeEditMode);
    $todos.addEventListener('click', editTodo);
    $todos.addEventListener('click', deleteTodo);
  };
  init();
})();
