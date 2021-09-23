import React from 'react';

import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
          
        const {id, ...itemProps} = item;

       if(typeof item === 'object' && 
            Object.keys(item).length !== 0 &&  
            item.label !== '' &&
            item.label !== ' ' && 
            !Array.isArray(item) )
            
        {
            return (
                <li key={id} className="list-group-item">
                    <PostListItem {...itemProps}/>
                </li>
            )
        }
    
    })

    return(
        <ul className="app-list list-group">
              {elements}
        </ul>
    )
}

export default PostList;