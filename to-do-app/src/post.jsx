import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default async function getPosts() {
    const {data , isLoading} = useQuery(['posts'], async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    });
    if (isLoading) return <p>Loading...</p>;

            return (
             <div>
            <li key={post.id}> {post.title} </li>
            </div>
            );

}