import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../Context/UserContext';
import MyProduct from './MyProduct';

const Myproducts = () => {
  const { user } = useContext(authContext)

  const [myproducts, SetmyProducts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_databaseurl}/cycles/myproduct?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(function (response) {

        SetmyProducts(response.data)
      });


  }, [user])
  const handleDelete = (id) => {
    const sure = window.confirm('are you sure to remove ')
    if (sure) {
      fetch(`${process.env.REACT_APP_databaseurl}/product/${id}`, {
        method: 'DELETE', // or 'PUT'
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data);
          // const{cycleDelete,promoDelete}=data;

          toast.success('your item remove successfully');
          const remainingProduct = myproducts.filter(p => p._id !== id);
          SetmyProducts(remainingProduct)

        })
    }
  }








  return (
    <div className='grid md:grid-cols-2 xl::grid-cols-3 gap-5'>
      {
        myproducts.map(myproduct => <MyProduct
          key={myproduct._id}
          myproduct={myproduct}
          handleDelete={handleDelete}
        >
        </MyProduct>)
      }
    </div>
  );
};

export default Myproducts;