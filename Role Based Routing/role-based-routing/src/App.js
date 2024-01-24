import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ display: "flex", gap: "12px", padding: "8px", backgroundColor:"gray", color:'white' }}>
        <Link to="/" style={{color:'white'}}>Home</Link>
        {(CURRENT_USER === USER_TYPE.USER || CURRENT_USER === USER_TYPE.ADMIN) ? <><Link to="/user" style={{color:'white'}}>User</Link>
        <Link to="/userProfile" style={{color:'white'}}>User Profile</Link></>: null}
        {(CURRENT_USER === USER_TYPE.ADMIN)? <><Link to="/admin" style={{color:'white'}}>Admin</Link></>: null}
        <div>You're logged in as: {CURRENT_USER}</div>
      </div>
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  const divStyle = {
    fontSize: "46px",
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicElement>
            <Home />
          </PublicElement>
        }
      ></Route>
      <Route
        path="/user"
        element={
          <UserElement>
            <User />
          </UserElement>
        }
      ></Route>
      <Route
        path="/userProfile"
        element={
          <UserElement>
            <User />
          </UserElement>
        }
      ></Route>
      <Route
        path="/admin"
        element={
          <AdminElement>
            <Admin />
          </AdminElement>
        }
      ></Route>
      <Route
        path="*"
        element={<div style={divStyle}>404: Page Not Found.</div>}
      ></Route>
    </Routes>
  );
}

const USER_TYPE = {
  PUBLIC: "Public",
  USER: "User",
  USER_PROFILE: "UserProfile",
  ADMIN: "Admin",
};

const CURRENT_USER = USER_TYPE.PUBLIC;

const Home = () => {
  return <div>Home Page</div>;
};

const User = () => {
  return <div>User Page</div>;
};

const Admin = () => {
  return <div>Admin Page</div>;
};

const PublicElement = ({ children }) => {
  return <>{children}</>;
};

const UserElement = ({ children }) => {
  if (CURRENT_USER === USER_TYPE.USER || CURRENT_USER === USER_TYPE.ADMIN) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/"} />;
    // return <>You do not have access.</>
  }
};

const AdminElement = ({ children }) => {
  if (CURRENT_USER === USER_TYPE.ADMIN) {
    return <>{children}</>;
  } else {
    // return <Navigate to={'/'}/>
    return <>You do not have access to this page.</>;
  }
};

export default App;
