import Axios from 'axios'

const axiosInstance = Axios.create({
    baseURL: "https://frebi.willandskill.eu/"
})


axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token !== null) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (err) {
    console.log(err)
    return Promise.reject(err)
})

axiosInstance.interceptors.response.use((response) => {
    console.log(response)
    return response.data
}, function (err) {
    console.log(err)
    return Promise.reject(err)
})


axiosInstance.Login = async (user) => {
    const data = await axiosInstance.post('/api-token-auth/', user)
    
    localStorage.setItem('token', data.token)

    return true
}

axiosInstance.ActivateUser = async (uid, token) => {
    console.log({uid, token})
    const data = await axiosInstance.post('/auth/users/activate', {uid, token})

    return true
}

axiosInstance.CreateUser = async (user) => {
    const data = await axiosInstance.post('/auth/users/', user)

    return true
}

axiosInstance.GetUser = async () => {
    const user = await axiosInstance.get('/api/v1/me/')
    
    return user
}


axiosInstance.GetAllCustomers = async () => {
    const data = await axiosInstance.get('/api/v1/customers/')

    return data.results
}

axiosInstance.CreateCustomer = async (customer) => {
    console.log('customer', customer)
    const data = await axiosInstance.post('/api/v1/customers/', customer)

    return true
}

axiosInstance.EditCustomerById = async (customer, id) => {
    const data = await axiosInstance.put(`/api/v1/customers/${id}/`, customer)

    return true
}

axiosInstance.DeleteCustomerById = async (id) => {
    const data = await axiosInstance.delete(`/api/v1/customers/${id}/`)
}


export default axiosInstance