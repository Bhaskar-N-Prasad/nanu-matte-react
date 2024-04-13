import './App.css'
import Card from './components/Card/Card.jsx'
import Login from './components/Login/Login.jsx'
import UserContextProvider from './context/UserContextProvider'


function App() {


  return (
    <UserContextProvider>
    <h1>Hello</h1>
    <Login/>
    <Card />
    </UserContextProvider>
  )
}

export default App
