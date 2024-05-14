import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/action";
// ./redux/Counter / counter.actions

import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/Header';
import AppBody from './components/AppBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Login from "./components/AuthPage/Login";
import Register from "./components/AuthPage/register";
import Verify from "./components/AuthPage/verify";
import Auth from './components/Auth';
import AdminDashboard from "./components/admin/admindashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserPage from "./components/admin/pages/user/user-view";
import ProductsPage from "./components/admin/pages/products/products-view";
import { useEffect } from "react";
import axios from 'axios';

function App(props) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const checkTokenAndNavigate = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8888/api/test/user', { withCredentials: true });
  //       if (response.status === 200) {
  //         // Kiểm tra role từ response
  //         const { authorities } = response.data;
  //         const isAdmin = authorities.some(authority => authority.authority === 'ROLE_ADMIN');
  //         if (isAdmin) {
  //           navigate('/admin');
  //         } else {
  //           navigate('/user');
  //         }
  //       }
  //     } catch (error) {
  //       if (error.response && error.response.status === 401) {
  //         // Thực hiện gọi API test admin
  //         try {
  //           const adminResponse = await axios.get('http://localhost:8888/api/test/admin', { withCredentials: true });
  //           if (adminResponse.status === 200) {
  //             navigate('/admin');
  //           }
  //         } catch (adminError) {
  //           if (adminError.response && adminError.response.status === 401) {
  //             // Xóa cookie và chuyển đến trang login
  //             // Xóa cookie ở đây
  //             navigate('/login');
  //           }
  //         }
  //       }
  //     }
  //   };

  //   checkTokenAndNavigate();
  // }, []);
  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/user" element={<AppBody />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route exact path="" element={<div>quan</div>} />
          <Route path="listuser" element={<UserPage />} />
          <Route exact path="listproduct" element={<ProductsPage />} />
        </Route>
      </Routes>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// import { Route, Link, Routes, Outlet } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1>Trang chủ</h1>
//       <Link to="/settings">Đến cài đặt</Link>
//     </div>
//   );
// };

// const Settings = () => {
//   return (
//     <div>
//       <h1>Cài đặt</h1>
//       <Link to="/settings/change-password">Đổi mật khẩu</Link>
//       {/* Điểm điều hướng phụ */}
//       <Outlet />
//     </div>
//   );
// };


// const ChangePassword = () => {
//   return (
//     <div>
//       <h1>Đổi mật khẩu</h1>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route path="/settings" element={<Settings />} >
//         {/* Bạn cũng có thể đặt các route con ở đây */}
//         <Route path="change-password" element={<ChangePassword />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;