import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.accessToken,'test token')
                    if (data.accessToken) {
                        setToken(data.accessToken);
                        localStorage.setItem('accessToken', data.accessToken);
                    }
                });
        }
    }, [email]);
    console.log(token,'this token is side the jwt ');
    return [token];
}

export default useToken;