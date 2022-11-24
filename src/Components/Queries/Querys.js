import { useQuery } from "@tanstack/react-query";






fetch(`${process.env.REACT_APP_databaseurl}/`);

const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch(`${process.env.REACT_APP_databaseurl}/`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json()
    )

})