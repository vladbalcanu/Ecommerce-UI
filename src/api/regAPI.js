import axios from 'axios'

export const authAPI = {
    async register({email, password}){
        return axios.post('/user/register', {email, password})
        .then(function (response) {
            // if(response.status === 200){
            //     setState(prevState => ({
            //         ...prevState,
            //         'successMessage' : 'Registration successful. Redirecting to home page..'
            //     }))
            //     localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
            //     redirectToHome();
            //     props.showError(null)
            // } else{
            //     props.showError("Some error ocurred");
            // }
            return response.data
        })
    }
}