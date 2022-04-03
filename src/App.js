import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Register from './Components/Register'
import AddRecord from './Components/AddRecord'
import Protected from './Components/Protected'
import RecordsList from './Components/RecordsList';
import AddDataset from './Components/AddDataset';
import Approvals from './Components/Approvals'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"}><Protected Cmp={Dashboard} /></Route>
        <Route exact path={"/login"}><Login/></Route>
        <Route exact path={"/register"}><Register/></Route>
        <Route exact path={"/addRecord"}><Protected Cmp={AddRecord} /></Route>
        <Route exact path={"/RecordsList"}><Protected Cmp={RecordsList} /></Route>
        <Route exact path={"/addDataset"}><Protected Cmp={AddDataset} /></Route>
        <Route exact path={"/Approvals"}><Protected Cmp={Approvals} /></Route>
      </Router>
    </div>
  );
}

export default App;
