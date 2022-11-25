import Axios from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import SearchPage from "./pages/searchPage/SearchPage";
import HomePage from "./pages/homePage/HomePage";
import { AppContext } from './context/AppContext';
import UserDetailsPage from "./pages/userDetailsPage/UserDetailsPage";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [show, setShow] = useState(true);
  const [showClearButton, setShowClearButton] = useState(false);
  const [userr, setUserr] = useState({});
  const searchUsers = ((keyword) => {
    setLoading(true);
    Axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => {
        setUsers(res.data.items);
        setLoading(false);
        if (res.data.items.length > 0) {
          setShowClearButton(true);
        } else {
          setShowClearButton(false);
        }
      })
      .catch(error => console.log({ error }));
  });
  const getUserr = ((userrName) => {
    Axios
      .get(`https://api.github.com/users/${userrName}`)
      .then(res => {
        setUserr(res.data);
        setLoading(false);
      })
      .catch(error => console.log({ error }));
  });
  const clearUsers = (() => {
    setUsers([]);
    setShowClearButton(false);
  });
  const initAlert = ((msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  });
  return (
    <AppContext.Provider value={{ alert, show, setShow, searchUsers, clearUsers, initAlert, users, loading, showClearButton, setShowClearButton, userr, getUserr }}>

      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={
            <SearchPage />
          } />
          <Route path='/userr/:login' element={<UserDetailsPage />} />

        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
