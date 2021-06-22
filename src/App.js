import React from "react";
import Profile from "./components/Profile/Profile";
import user from "./data/user.json";

const App = () => (
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
);

export default App;
