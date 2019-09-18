import React from "react";
import authors from "./data";

//Components
import AuthorsList from './AuthorsList';
import Sidebar from './Sidebar';

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar/>
        </div>
        <div className="content col-10">
            <AuthorsList authors={authors}/>

        </div>
      </div> 
    </div>
  );
}

export default App;
