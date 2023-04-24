import axios from 'axios';
import { cfg } from './init.js';

const api = axios.create({
	baseURL: cfg.api_url
});

api.interceptors.request.use((config) => {
	config.headers['sw-access-key'] = cfg.sw_access_key;
	config.headers['Content-Type'] = 'application/json';
	return config;
});

export { api };
