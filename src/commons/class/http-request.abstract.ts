import { AxiosResponse } from "axios";
import { Observable } from "rxjs";

export abstract class CHttpRequest {

    /**
     * @description Method to make a GET request
     * @param { String } url 
     * @param { Record<String, any> } headers 
     * @returns { Observable<AxiosResponse<T>> }
     */
    abstract get<T>( url: string, headers: Record<string, any> ): Observable<AxiosResponse<T>>;

    /**
     * @description Method to make a POST request
     * @param { String } url 
     * @param { Record<String, any> } body 
     * @param { Record<String, any> } headers 
     * @returns { Observable<AxiosResponse<T>> }
     */
    abstract post<T>( url: string, body: Record<string, any>, headers: Record<string, any> ): Observable<AxiosResponse<T>>;

    /**
     * @description Method to make a PUT request
     * @param { String } url 
     * @param { Record<String, any> } body 
     * @param { Record<String, any> } headers 
     * @returns { Observable<AxiosResponse<T>> }
     */
    abstract put<T>( url: string, body: Record<string, any>, headers: Record<string, any> ): Observable<AxiosResponse<T>>;
    
    /**
     * @description Method to make a PATCH request
     * @param { String } url 
     * @param { Record<String, any> } body 
     * @param { Record<String, any> } headers 
     * @returns { Observable<AxiosResponse<T>> }
     */
    abstract patch<T>( url: string, body: Record<string, any>, headers: Record<string, any> ): Observable<AxiosResponse<T>>;
    
    /**
     * @description Method to make a DELETE request
     * @param { String } url 
     * @param { Record<String, any> } headers 
     * @returns { Observable<AxiosResponse<T>> }
     */
    abstract delete<T>( url: string, headers: Record<string, any> ): Observable<AxiosResponse<T>>;
}