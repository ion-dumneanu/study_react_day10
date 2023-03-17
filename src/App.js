import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Error from './Error';
import Blog from './pages/Blog';

const router = createBrowserRouter(
  [{path: "/",
  element: <Root />,
  id: 'root',
  errorElement: <Error />,
  children: [
    {path:'/', element: <Home />},
    {path:'/about', element: <AboutUs />},
    {path:'/pages', element: <Pages />, children:[{path:'team', element: <Teams />}]},
    {path:'/blog', element: <Blog />},
    {path:'/contact', element: <Contact />}
  ]}]
);

function Home(){
  return <div>Home
  </div>
}
function AboutUs(){
  return <div>
    About Us
    <br/>
    <Link to='/'>Home</Link>
  </div>
}

function Pages(){
  return <div>
    Pages
    <br/>
    <Link to='/'>Home</Link>
    </div>
}

function Teams(){
  return <div>
    Teams
    <br/>
    <Link to='/'>Home</Link>
    </div>
}

function Contact(){
  return <div>
    Contact
    <br/>
    <Link to='/'>Home</Link>

    </div>
}

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>

  );
}

export default App;
