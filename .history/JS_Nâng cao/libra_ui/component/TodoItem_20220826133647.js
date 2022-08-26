import html from "../core.js";

function TodoItem({ todo }) {
  return html`
    <li class="${todo.completed && 'completed'}">
          <div class="view">
            <input class="toggle" type="checkbox" ${todo.completed && 'checked'} />
            <label>${todo.title}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
    </li>
  `;
}

export default TodoItem;
