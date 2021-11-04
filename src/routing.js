import {
    useLocation,
    Routes,
    Route
  } from "react-router-dom";


import Navbar from './components/Navbar';

// Pages
import Home from './pages/index';
import Login from './pages/login';
import Contact from './pages/contacts';
import ContactMe from './pages/contactme';
import Blog from './pages/blog';
import NotFound from './pages/notfound';
import Redirect from './pages/redirect';
import Hook from './pages/hook';

export default function Routing(){
    let path = useLocation();
    return(
    <>
      {path.pathname=='/login'?null:<Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/contactsme" element={<ContactMe />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
    )
}