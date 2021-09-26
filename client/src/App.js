import { BrowserRouter as Router, Switch, Route}from "react-router-dom"
import './app.css'
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import ResetPassword from './pages/resetpassword/ResetPassword'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Landing from "./pages/landingpage/Landing"
import AdminHome from "./pages/home/Home"
import UserList from "./pages/userList/UserList"

import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct"
// routes
import PrivateRoute from "./routing/PrivateRoute"
import PrivateScreen from './pages/private/PrivateScreen'

function App() {
  return (
    <Router>



        <Switch>
            <PrivateRoute exact path="/private" component={PrivateScreen}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={SignUp}/>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route exact path="/passwordreset/:resetToken" component={ResetPassword}/>

            <PrivateRoute exact path="/admin" component={AdminHome}/>
            <PrivateRoute exact path="/users" component={UserList}/>
            <PrivateRoute exact path="/user/:userId" component={User}/>
            <PrivateRoute exact path="/newUser" component={NewUser}/>
            <PrivateRoute exact path="/products" component={ProductList}/>
            <PrivateRoute exact path="/product/:productId" component={Product}/>
            <PrivateRoute exact path="/newproduct" component={NewProduct}/>

            <Route exact path="/">   <Landing />   </Route>




        </Switch>


    </Router>
  );
}

export default App;
