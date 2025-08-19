
import './App.css'
import ListEmployee from './Components/ListEmployee'
import Header from './Components/Header'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {
  
  return (
  <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployee />} />
          <Route path='/employees' element={<ListEmployee />} />
          <Route path='/add-employee'element={<EmployeeComponent/>}></Route>
          <Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
