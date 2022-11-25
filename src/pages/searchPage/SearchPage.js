import React, { useContext } from 'react'
import Search from '../../components/search/Search';
import Users from '../../components/users/Users';
import { AppContext } from '../../context/AppContext';


const SearchPage = ({ showClearButton }) => {
    const context = useContext(AppContext);
    return (
        <>
            <Search showClearButton={context.users.length > 0 ? true : false} />
            <Users />

        </>
    )
}

export default SearchPage