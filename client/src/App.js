import { BrowserRouter as Router, Switch, Route}from "react-router-dom"
import './app.css'
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import ResetPassword from './pages/resetpassword/ResetPassword'
import Login from './pages/login/Login'
import Login2 from './pages/login2/Login2'

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
import InterviewPrep from './pages/private/interviewPrep/InterviewPrep'

function App() {
  return (
    <Router>



        <Switch>
            <PrivateRoute exact path="/private" component={PrivateScreen}/>
            <PrivateRoute exact path="/private/interviewPrep" component={InterviewPrep}/>
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


            <Route exact path="/login2" component={Login2}/>
            <Route exact path="/" component={Landing}/>





        </Switch>


    </Router>
  );
}

export default App;
