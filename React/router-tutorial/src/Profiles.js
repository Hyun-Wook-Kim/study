import { Link, Routes, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록 :</h3>
            <ul>
                <li>
                    <Link to='/profiles/me'>me</Link>
                </li>
                <li>
                    <Link to='/profiles/you'>you</Link>
                </li>
            </ul>

            <Routes>
                <Route path=":username" element={<Profile></Profile>}></Route>
            </Routes>

        </div>
    )
}
export default Profiles;