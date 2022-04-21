import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Profile from './Profile';
import Profiles from './Profiles';

function App() {
  return (
      <div>

      <div>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
          <li>
            <Link to='/profiles'>프로필</Link>
          </li>

        </ul>
      </div>

        <Routes>
          <Route path = '/' element={<Home/>} />
          {['/about', '/detail', '/posts'].map((path)=>{
            return(
              <Route path = {path}  element={<About/>} key={`routerPath-${path}`} />
            )
          })}
          <Route path = '/profiles/*' element={<Profiles></Profiles>}></Route>
          <Route path ='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    );
}

export default App;
