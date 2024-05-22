import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/action";
// ./redux/Counter / counter.actions

import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/Header/Header';
import AppBody from './components/AppBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

import Auth from './components/Auth/Auth';
import AdminDashboard from "./components/admin/admindashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserPage from "./components/admin/pages/user/user-view";
import ProductsPage from "./components/admin/pages/products/products-view";
import { useEffect } from "react";
import axios from 'axios';
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import MyAccount from "./components/profile/ProfileContent/ProfileContentItems/MyAccount";
import OrderManage from "./components/profile/ProfileContent/ProfileContentItems/OrderManage";
import ProductFeedback from "./components/profile/ProfileContent/ProfileContentItems/ProductFeedback";
import CheckoutInfo from "./components/profile/ProfileContent/ProfileContentItems/CheckoutInfo";
import Address from "./components/profile/ProfileContent/ProfileContentItems/Address";
import Notification from "./components/profile/ProfileContent/ProfileContentItems/Notification";
import ChangePassword from "./components/profile/ProfileContent/ProfileContentItems/ChangePassword";
import ProductDetail from "./components/detail/ProductDetail";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/checkout/CheckOut";
import API_log from "./log";

function App(props) {
  const navigate = useNavigate();
  return (
    <div className="App" >

      <Routes>
        <Route exact path="/" element={<API_log />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/user" element={<AppBody />} >
          <Route exact path="" element={<Home />} />
          <Route exact path="detail" element={<ProductDetail />} />
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="checkout" element={<CheckOut />} />
          <Route path="profile" element={<Profile />} >
            <Route exact path="" element={<MyAccount />} />
            <Route path="ordermanage" element={<OrderManage />} />
            <Route path="productfeedback" element={<ProductFeedback />} />
            <Route path="checkoutinfo" element={<CheckoutInfo />} />
            <Route path="address" element={<Address />} />
            <Route path="notification" element={<Notification />} />
            <Route path="changepassword" element={<ChangePassword />} />

          </Route>
        </Route>
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
