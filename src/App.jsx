import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { React } from 'react'
import './App.css'
import DemoNavbar from './components/DemoNavbar'
import UpdateBlog from './components/UpdateBlog'
import CreateBlog from './components/CreateBlog'
import SingleBlog from './components/SingleBlog'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Navbar' element={<DemoNavbar />} />
          <Route path='/BlogForm' element={<CreateBlog />} />
          <Route path='/EditBlog' element={<UpdateBlog />} />
           <Route path='/Blogs' element={<SingleBlog/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
