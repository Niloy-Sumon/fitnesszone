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
    const navigate = useNavigate();
    useEffect(()=>{
      const getOrders = async() =>{
        const email = user.email;
        const url = `https://fitnesszone-server.vercel.app/myorder?email=${email}`;
        try{
            const {data} = await axiosPrivate.get(url);
            setOrder(data);
        }
        catch(error){
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                localStorage.removeItem('token')
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
                <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>My Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          {
                    order.map(order =><MyorderTable  order={order}/> )
                }
          </table>
      </div>
                
                   
                </div>
            </section>   
        </>
    );
};

export default MyOrder;