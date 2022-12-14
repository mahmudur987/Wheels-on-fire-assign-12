
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  // console.log(`${process.env.REACT_APP_databaseurl}`)

  return (
    <div className="lg:w-[95%] mx-auto">

      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
