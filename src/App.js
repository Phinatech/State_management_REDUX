import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login"
import Profile from "./Components/Profile"


function App() {
  return (
    <div className="App">
      <br />
      <center style={{
        marginTop: "30px", backgroundColor :"grey", width:"100%",
        height:"70vh"
    }}>
        <Login />
        <Profile/>
      </center>
    </div>
  );
}

export default App;
