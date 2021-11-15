import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Universal/Header/Header";
import Footer from "./Pages/Universal/Footer/Footer";
import Allwatch from "./Pages/Home/Alwatch/Allwatch";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

import Review from "./Pages/Home/Review/Review";
import Addproduct from "./Pages/Admin/Addproducts/Addproduct";
import Productdetails from "./Pages/Home/Products/Productdetails/Productdetails";
import Authprovider from "./Context/Authprovider/Authprovider";
import Privetroute from "./Pages/Universal/Priveteroute/Privetroute";

import About from "./Pages/Home/About/About";
import Admindashboard from "./Pages/Admin/Admindashboard/Admindashboard";
import Error from "./Pages/Universal/Error/Error";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/collection">
              <Allwatch></Allwatch>
            </Route>
            <Privetroute exact path="/productdetails/:id">
              <Productdetails></Productdetails>
            </Privetroute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/review">
              <Review></Review>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Privetroute exact path="/userdashboard">
              <Dashboard></Dashboard>
            </Privetroute>
            <Privetroute exact path="/admindashboard">
              <Admindashboard></Admindashboard>
            </Privetroute>

            <Route exact path="/addproduct">
              <Addproduct></Addproduct>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
