import fetch from "isomorphic-unfetch";

// All  implementations
type Config = {
    apikey: string;
    baseUrl? : string;

}

export abstract class Base {
    private apikey: string;
    private baseUrl: string;

    constructor(config: Config){
        this.apikey = config.apikey;
        this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";

    }

    // T both users or any other collections we have
    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const headers = {
            'Content-Type': 'application/json',
            'api-key': this.apikey
        };

        const config = {
            ...options,
            headers
        };

        return fetch(url, config).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText)
            }
            
        });
        // return fetch(url, config).then((response) => {
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     }
        //     return response.json();
        // })


    }

     

}