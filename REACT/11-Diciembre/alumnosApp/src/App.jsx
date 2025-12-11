
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import CreateStudentPage from './pages/CreateStudentPage'
import DetailsStudentPage from './pages/DetailsStudentPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/create" element={<CreateStudentPage/>}/>
      <Route path="/details/:idAlumno" element={<DetailsStudentPage/>}/>


       



      
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
