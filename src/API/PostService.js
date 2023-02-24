import axios from "axios";


export default class PostService {
    static async getAll(){
        try{
            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const response = await axios.get('https://blog-platform-for-guild.vercel.app/blogs')
        return response.data
        }
        catch(e){
            console.log(e)
        }
        
    }
}