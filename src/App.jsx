import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import PowerBIReport from './components/PowerBIReport'
import TodoList from './components/TodoList'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/report" element={<PowerBIReport />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  )
}

export default App
