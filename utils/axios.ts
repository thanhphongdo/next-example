import Axios, { AxiosResponse } from 'axios';
const https = require('https');

export class BaseAxios {
    headers: any;
    baseUrl: string;
    agent = new https.Agent({
        rejectUnauthorized: false
    });
    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || '';
        this.headers = {};
    }
    get<T>(url: string, headers?: any): Promise<T> {
        return Axios.get(this.baseUrl + url, { headers: headers || this.headers, httpsAgent: this.agent }).then((response: AxiosResponse<T>) => {
            return response.data as T;
        }).catch(err => {
            return this.handleError(err);
        });
    }

    post<T>(url: string, params: any, headers?: any): Promise<T> {
        return Axios.post(this.baseUrl + url, params || {}, { headers: headers || this.headers }).then((response: AxiosResponse<T>) => {
            return response.data as T;
        }).catch(err => {
            return this.handleError(err);
        });
    }

    put<T>(url: string, params: any, headers?: any): Promise<T> {
        return Axios.post(this.baseUrl + url, params || {}, { headers: headers || this.headers }).then((response: AxiosResponse<T>) => {
            return response.data as T;
        }).catch(err => {
            return this.handleError(err);
        });
    }

    delete<T>(url: string, params: any, headers?: any): Promise<T> {
        return Axios.post(this.baseUrl + url, params || {}, { headers: headers || this.headers }).then((response: AxiosResponse<T>) => {
            return response.data as T;
        }).catch(err => {
            return this.handleError(err);
        });
    }

    handleError(err: any) {
        return Promise.reject(err);
    }
}