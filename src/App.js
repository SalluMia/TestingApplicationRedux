import { Route, Routes,useMatch } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Signup from './component/SignUp/Signup';
import Nav from './component/Nav/Nav';
import Signin from './component/SignIn/Signin';
import Details from './component/DetailPage/Details';

function App() {
  // const match = useMatch();
  return (
    <div className="App">
         <Nav/>
        
         <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/home' element={<Home/>}></Route>
             <Route path='/signup' element={<Signup/>}></Route>
             <Route path='/signin' element={<Signin/>}></Route>
             <Route  path="/details/:id" element={<Details/>} />
         </Routes>
    </div>
  );
}

export default App;
