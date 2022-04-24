import './App.css';
import { Link, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {

  let activeStyle = {
    textDecoration : 'underline',
    color : 'red'
  }

  let activeClassname = 'thisIsActivated'

  return (
      <div>

      

      <div>
        <ul>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })} to='/'>HOME</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='about'>About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive? activeClassname : undefined} style = {({isActive}) => ({ color : isActive ? 'pink' : 'black'})} to='/profiles'>프로필</NavLink>
          </li>
          <li>
            <NavLink to ='/history'>히스토리 예제</NavLink>
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
          <Route path = '/history/' element={<HistorySample/>}></Route>
          <Route path ='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    );
}

export default App;
