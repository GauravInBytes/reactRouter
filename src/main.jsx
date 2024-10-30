import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import User from './components/User';
import Github, { githubInfoLoader } from './components/Github';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ]
//   },
// ]);

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/:id" element={<User />} />
    <Route path="github" element={<Github />} loader={githubInfoLoader} />
  </Route>
));

createRoot(document.getElementById('root')).render(  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
