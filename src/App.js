import {BrowserRouter, Switch, Route} from 'react-router-dom' 

// View Component Imports
import ProductsView from './views/ProductsView';
import NavBar from './components/NavBar';
import AddProductView from './views/AddProductView';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductsView} />
        {/* <Route exact path="/product/:id" component={SingleProductView} /> */}
        <Route exact path="/addProduct" component={AddProductView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
