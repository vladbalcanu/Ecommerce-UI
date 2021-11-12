import axios from 'axios'

export const authAPI = {
    async login({email, password}){
        return axios.post('/user/login', {email, password})
        .then(function (response) {
            // if(response.status === 200){
            //     localStorage.setItem('ACCESS_TOKEN_NAME', response.data.access);
            //     localStorage.setItem('REFREH_TOKEN_NAME', response.data.refresh);
            //     dispatch(setIsAuth()) 

            // }
            return response.data
        })
    }
}