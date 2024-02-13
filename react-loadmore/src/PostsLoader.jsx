import {useState} from "react";

const PageLoader=()=>{
    const url='https://jsonplaceholder.typicode.com/posts'
    const [posts,setPosts] = useState(null)
    const [page,setPage]=useState(0);
    let jumps=10;
    const fetchPosts=async ()=>{
        try{
            const response=await fetch(url);
            const body= await response.json();
            setPosts(body);
        }catch (exception){
            console.log(exception.message)
        }
    }
    const incrementPage=()=>{
        setPage(prevNumber=>prevNumber+10)
    }
    return(
        <>
            {!posts && <button onClick={fetchPosts}>Fetch Posts</button>}
            <ol>
                {posts && posts.slice(0,page+10).map(post=>{
                    return (
                        <li key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </li>
                    )
                })}
                {(posts && page<=posts.length-(2*jumps)) && <button onClick={incrementPage}>Load More</button>}
            </ol>
        </>
    )
}
export default PageLoader