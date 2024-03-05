import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Layout from "./components/pages/Layout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginReg from "./components/pages/auth/LoginReg";
import PasswdResetEmail from "./components/pages/auth/PasswdResetEmail";
import ResetPasswordPage from "./components/pages/auth/ResetPasswordPage";
import Dashboard from "./components/pages/Dashboard";
import ChangePassword from "./components/pages/auth/ChangePassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Layout />}>
            {/* Defining child routes under Layout, which means we are rendering child routes based on path. Check Layout.js for Outlet. We are doing this because, we will need Navbar for all our pages so it is constant. */}
            <Route index element={<Home />}/> 
            <Route path="contact" element={<Contact />}/> 
            <Route path="login" element={<LoginReg />}/> 
            <Route path="pwdresetemail" element={<PasswdResetEmail />}/> 
            <Route path="resetpwdpage" element={<ResetPasswordPage />}/> 
          </Route>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path='*' element={<h1>404: Page Not Found!</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
