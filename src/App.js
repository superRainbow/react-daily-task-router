import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, Outlet, useParams } from 'react-router-dom';

const Home = () => <p>首頁 </p>;
const Logout = () => {
  const navigate = useNavigate();
  const logout = () => navigate('/login');
  return (<button onClick={logout}>登出</button>)
};
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面 </p>
      <Logout/>
    </>
  )
};

const Post = () => {
  return (
    <>
      <p>這是 Post 頁面 </p>
      <Outlet />
    </>
  )
};
const PostDetail = () => {
  let params = useParams();
  return (
    <p>post id： {params.postId}</p>
  )
}

const Login = () => <p>這是登入頁面 </p>;
const Register = () => <p>這是註冊頁面 </p>;

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post/123">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/todo" element={<Todo />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/post" element={<Post />} >
            <Route path=":postId" element={<PostDetail />} /> 
          </Route> 
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 頁面</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
