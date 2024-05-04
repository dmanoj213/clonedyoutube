import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { children } from 'react';
import WatchPage from './components/WatchPage';
import MainContainer from "./components/MainContainer";

function App() 
{
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      children : [

        {
          path: "/",
          element: <MainContainer/>,
          
        },
        {
          path: "watch",
          element: <WatchPage/>
          
        },
      ]
    },

    

])
  return (
    <div>
    <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}/>

    </Provider>
      
    </div>
  );
}

export default App;
