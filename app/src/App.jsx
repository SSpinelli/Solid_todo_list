import { createSignal } from 'solid-js';
import styles from './App.module.css';

function App() {
  const [allTasks, setAllTasks] = createSignal([])
  let inputText;

  function handleCreateButton() {
    const newTask = {
      text: inputText.value,
      id: String(new Date().getTime())
    }

    const updatedList = [...allTasks(), newTask]

    setAllTasks(updatedList)
  }

  function handleDeleteButton(event) {
    const newListOfTasks = allTasks().filter((task) => task.id !== event.target.id)

    setAllTasks(newListOfTasks)
  }

  function changeTaskStatus(event) {
    event.target.classList.toggle('selecionado')
  }

  return (
    <div class={styles.App}>
      <h1>Todo list em Solid</h1>
      <input ref={inputText} type='text' placeholder='escreva sua tarefa aqui...' />
      <button onclick={handleCreateButton}>Criar Task</button>

      <ul>
        {allTasks().map((task) => {
          return (
            <li>
              <span onclick={changeTaskStatus}>{task.text}</span>
              <button id={task.id} onClick={handleDeleteButton}>Deletar Task</button>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
