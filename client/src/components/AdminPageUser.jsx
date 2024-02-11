import React from 'react';
import useGetAllUserData from '../CustomHooks/GetAllUser';
import UsersCard from './UsersCard';

const AdminPageUser = ({search,sortBy}) => {
    const userData = useGetAllUserData(search, sortBy);
    console.log(userData,"hello user ji")

    // console.log(userData, "hello userdata");
    return (
        <div className='flex flex-wrap m-8 gap-5'>
            {
                userData && userData.map((ele)=>(
                    <UsersCard key={ele.id} user={ele} />
                ))
            }
            
        </div>
    );
};

export default AdminPageUser;
