import {BrowserRouter, Switch, Route} from 'react-router-dom' 

// View Component Imports
import ProductsView from './views/ProductsView';
import NavBar from './components/NavBar';
import AddProductView from './views/AddProductView';
import SingleProductView from './views/SingleProductView';
import EditProductView from './views/EditProductView';
import AddCategoryView from './views/AddCategoryView';
import CategoriesView from './views/CategoriesView';
import OrdersView from './views/OrdersView';
import LoginView from './views/LoginView';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductsView} />
        <AuthRoute exact path="/categories" component={CategoriesView} />
        <Route exact path="/orders" component={OrdersView}/>
        <Route exact path="/product/:id" component={SingleProductView}/>
        <Route exact path="/editProduct/:id" component={EditProductView} />
        <Route exact path="/addProduct" component={AddProductView} />
        <Route exact path="/addCategory" component={AddCategoryView} />
        <Route exact path="/login" component={LoginView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
