import React from 'react'

const Post = props => {
    const {posts} = props;

    return ( 
        <div>
            <ul>
                { posts.map(post => (
                    <li key={post._id} style={{color: "#fff"}}>                
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </li>                  
                ))}
            </ul>
        </div>
     );
}
 
export default Post;