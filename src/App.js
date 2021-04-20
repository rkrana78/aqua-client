import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AddService from './components/Home/AddService/AddService';
import AddTestimonial from './components/Home/AddTestimonial/AddTestimonial';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookService from './components/BookService/BookService';
import Orders from './components/Orders/Orders';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServiceDashboard from './components/Dashboard/ServiceDashboard/ServiceDashboard';
import ManageServices from './components/ManageServices/ManageServices';
import ManageDashboard from './components/Dashboard/ManageDashboard/ManageDashboard';
import AddAdmin from './components/AddAdmin/AddAdmin';
import TestimonialDashboard from './components/Dashboard/TestimonialDashboard/TestimonialDashboard';
import BookDashboard from './components/Dashboard/BookDashboard/BookDashboard';
import Services from './components/Home/Services/Services';
import About from './components/Home/About/About';
import Footer from './components/Home/Footer/Footer';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Footer />
          </Route>
          <PrivateRoute path="/testimonial">
            <TestimonialDashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <ServiceDashboard />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageDashboard />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/bookService/:id">
            <BookDashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
