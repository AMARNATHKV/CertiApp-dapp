
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Mainlayout from './layouts/Mainlayout';
import IssueCertificate from './pages/IssueCertificate';
import ViewCertificate from './pages/ViewCertificate';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Mainlayout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/issuecertificate' element={<IssueCertificate/>} />
        <Route path='/viewcertificate/:id' element={<ViewCertificate/>} />
      </Route>
     
    </>
  ))
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  )
}

export default App