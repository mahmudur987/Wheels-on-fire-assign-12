import { useEffect, useState } from "react";


export const useSeller = (email) => {
    const [seller, Setseller] = useState(null)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_databaseurl}/user?email=${email}`)
            .then(res => res.json())
            .then(data => {

                // console.log(data.userType)
                if (data.userType === 'Seller') {
                    Setseller(data)
                }

            })


    }, [email])
    return [seller]
};

