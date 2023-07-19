import React, { useState } from "react";
import { robots } from "../components/robots";
import CardList from "../components/Card_list";
// import Scroll from "../components/Scroll";
const App = () => {
  const [query, setQuery] = useState("");
  if(robots.length===0){
    return (
      <h1>Loading</h1>
    )
  }
  else{
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue br3"
          type="search"
          placeholder=" search robots"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
     
        <CardList
          robots={robots.filter((robot) =>
            robot.name.toLowerCase().includes(query.toLowerCase())
          )}
        />
        
    </div>
  );
}};
export default App;
