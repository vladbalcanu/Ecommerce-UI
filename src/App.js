import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Create from './Create';
import ProductsDetails from './ProductsDetails';
import NotFound from './NotFound';
import ProductList from './ProductList';


function App() {


  return (
    <Router>
    <div className="App">
       <Navbar></Navbar>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/create">
          <Create></Create>
        </Route>
        <Route path="/products/:id">
          <ProductsDetails></ProductsDetails>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
