import React from "react";
import "./App.module.scss";
import TitleView from "./views/TitleView/TitleView";
import StoryView from "./views/StoryView/StoryView";
import InnerMenuView from "./views/InnerMenuView/InnerMenu";
import "./fonts/stylesheet.css";

function App() {
  return (
    <div className="App">
      <TitleView />
      <StoryView />
      <InnerMenuView />
    </div>
  );
}

export default App;
