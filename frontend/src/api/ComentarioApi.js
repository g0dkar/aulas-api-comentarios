import axios from 'axios'

export const API_URL = {
    prod: 'https://623a20db28bcd99f027a56c8.mockapi.io/v1',
    local: 'http://localhost:8080'
}

const isLocalhost = () => (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

class ComentariosApi {
    constructor(baseUrl = API_URL.prod) {
        this.baseUrl = baseUrl;
    }

    delay(maximo) {
        return new Promise((resolve) => {
            if (maximo > 0) {
                setTimeout(() => resolve(), maximo / 2 + Math.random() * maximo)
            }
            else {
                resolve()
            }
        })
    }

    listComment() {
        //return axios.get(this.baseUrl + "/comentario")
        return fetch(this.baseUrl + "/comentario")
            .then(response => response.json())
    }
}

export default ComentariosApi;
