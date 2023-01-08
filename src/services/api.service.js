import { ref } from 'vue'
import api from './api'

class ApiService {
    getData = () => {
        const data = ref(null)

        api({
            url: `/data/`,
            method: 'GET',
        }).then(res => {
            if (res && res.status == 200) {
                data.value = res.data.results
                console.log(data.value)
            }
        }).catch(err => {
            console.log(err)
        })

        return { data }
    }
}


export default new ApiService()