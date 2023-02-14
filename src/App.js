

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Inventory from './Components/Inventory/Inventory';
import Shop from './Components/Shop/Shop';
import Manege from './Components/Manege/Manage'
import Layouts from './Layouts/Main';
import Order from './Components/Order/Order';
import { productAndCartLoader } from './Components/Loaders/ProductAndCartLoader';



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layouts></Layouts>, children: [
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productAndCartLoader,
          element: <Order></Order>
        },
        { path: '/home', element: <Home></Home> },
        { path: '/inventory', element: <Inventory></Inventory> },
        { path: '/manage', element: <Manege></Manege> },

        { path: '/*', element: <h2>404</h2> }
      ]
    },

  ])
  return (
    <div >

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
