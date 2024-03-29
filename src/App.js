import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {Home, Login, Profile, Register, ResetPassword} from "./pages"



function Layout() {                         //check If the user is logged in
  const user = null;
  const location = useLocation();

  return user?.token ? (                    //if not redirect to login
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
function App() {                              //if logged in user can access protected route
  return (
    <div className="w-full mn-h-[100vh]">
      <Routes>        
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>               
          <Route path="/profile/:id?" element={<Profile/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>

      </Routes>
    </div>
  );
}

export default App;
