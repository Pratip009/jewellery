import { createRoot } from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routers/router.jsx';
import { Provider } from 'react-redux'
import { store } from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
