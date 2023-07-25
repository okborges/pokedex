import axios from 'axios'

export const baseUrl = 'https://pokemiddleware.gateway.linkapi.com.br/v1'
export const api = axios.create({
	baseURL: baseUrl,
})
