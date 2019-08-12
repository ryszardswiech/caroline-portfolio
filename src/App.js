import React from "react";
import "./App.module.scss";
import TitleView from "./views/TitleView/TitleView";
import StoryView from "./views/StoryView/StoryView";
import MenuWorksView from "./views/MenuWorksView/MenuWorksView";
import "./fonts/stylesheet.css";

function App() {
  return (
    <div className="App">
      <TitleView />
      <StoryView />
      <MenuWorksView />
    </div>
  );
}

export default App;
