import React from "react";

//Components
import AuthorCard from './AuthorCard';

function AuthorsList(props){  
    const authorcard = props.authors.map(author =>  <AuthorCard auth={author} key={author.last_name}/>);

    return (
        <div className="authors">
        <h3>Authors</h3>
        <div className="row">
        {authorcard}
        </div>
      </div>
    )
}

export default AuthorsList