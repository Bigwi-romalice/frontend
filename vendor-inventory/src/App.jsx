import { RouterProvider } from 'react-router'
import './App.css'
import {Provider} from 'react-redux'
import {router} from './routes'
import { store } from './store'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
 
function App() {
 

  return (
    <>
      <Provider store={store}>
            <RouterProvider router={router}/>
            <ToastContainer />
      </Provider>
    </>
  )
}

export default App
