import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Blog from './Pages/Blog/Blog';
import DetailService from './Pages/DetailsService/DetailService';
import Home from './Pages/Home/Home';
import NotFound404 from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Shop from './Pages/Shop/Shop';
import PrivateRoute from './Pages/SignIn/PrivateRoute';
import SignIn from './Pages/SignIn/SignIn';
import Signup from './Pages/SignUp/SignUp';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <PrivateRoute path="/service-details/:id">
              <DetailService />
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog />
            </PrivateRoute>
            <PrivateRoute path="/shop">
              <Shop />
            </PrivateRoute>
            <Route path="*">
              <NotFound404 />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
