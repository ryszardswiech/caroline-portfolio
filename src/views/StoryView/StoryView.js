import React from "react";
import carolinePhoto from "../../img/karolina_swiech.jpg";
// import styles from "./StoryView.module.scss";

const StoryView = () => (
  <div>
    <h1>Hi, I am Caroline</h1>
    <img src={carolinePhoto} alt="Caroline Święch" />
    <h2>and this is my story</h2>
    <h3>I am twenty-seven </h3>
    <p>and I have always loved to draw.</p>
    <p>
      I am Historian with love-hate relationship with Russia, who was taken by
      The Korean wave - Hallyu.
    </p>
    <h3>by the way I’m from Poland</h3>
    <p>
      I’m attending to the Graphic Design School in Cracow and I’ve already
      designed websites for <strong>Promexpo</strong> and one site for
      <strong>Smilefolw Art Company</strong>.
    </p>
    <h3>so you can say I’m a web designer</h3>
    <p>
      using Adobe <strong>Photoshop</strong>, <strong>Ilustrator</strong> but
      mostly <strong>Figma</strong>.
    </p>
  </div>
);

export default StoryView;
