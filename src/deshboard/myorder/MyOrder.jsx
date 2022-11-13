import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axiosPrivate from '../../api/PrivateAxios';
import Sidemenu from '../../shared/sidebar/Sidemenu';
import MyorderTable from './MyorderTable';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
    console.log(order);
    const navigate = useNavigate();
    useEffect(()=>{
      const getOrders = async() =>{
        const email = user.email;
        const url = `http://localhost:5000/myorder?email=${email}`;
        try{
            const {data} = await axiosPrivate.get(url);
            setOrder(data);
        }
        catch(error){
            console.log(error.message);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/login')
            }
        }
    }
    getOrders();
    },[user])
    return (
        <>
         <section className='flex gap-6'>
                <Sidemenu/>
                <div className="m-3 text-xl text-gray-900 font-semibold">
                <h1>This is order page:{order.length}</h1>
                   <MyorderTable />
                </div>
            </section>   
        </>
    );
};

export default MyOrder;