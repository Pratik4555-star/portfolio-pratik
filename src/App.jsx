import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import CustomCursor from './cursor/CustomCursor'
import Home from './components/Home'

import Startup from './components/Startup'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='startup' element = {<Startup/>}/>
  </Route>
  )
)

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    <CustomCursor/>
    </>
  )
}

export default App
