import axios from 'axios';
import React, { useContext, useState } from 'react';
import { authContext } from '../../Context/UserContext';

const Myproducts = () => {
  const { user } = useContext(authContext)

  const [myproduct, SetmyProduct] = useState([])

  // axios.get(`${process.env.REACT_APP_databaseurl}/cycles/myproduct?email=${user?.email}`)
  //   .then(function (response) {
  //     // console.log(response.data);
  //     SetmyProduct(response.data)
  //   });

  // // console.log(myproduct)




  return (
    <div>

    </div>
  );
};

export default Myproducts;