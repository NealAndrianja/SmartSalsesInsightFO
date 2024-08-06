import './App.css'
import { Provider } from 'react-redux'
import { TaskList } from './components/TaskList'
import { TaskAddItem } from './components/TaskAddItem'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <h1>Todo List</h1>
      <TaskAddItem />
      <TaskList />
    </Provider>
  )
}

export default App
