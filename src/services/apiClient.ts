import axios from "axios";
export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: '10a4337b9e5946d3a816e84e985fb482'
        }
        
    }
    
)