import { useEffect, useState } from "react";


export const useAdmin = (email) => {
    const [admin, Setadmin] = useState(null)

    const [adminLoading, Setadminloading] = useState(true)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_databaseurl}/user?email=${email}`)
            .then(res => res.json())
            .then(data => {

                // console.log(data)
                if (data.role === 'admin') {
                    Setadmin(data);
                    Setadminloading(false);
                }

            })


    }, [email])
    return [admin, adminLoading]
};
