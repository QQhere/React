import React from 'react';

const YoutubeItem = (props) => {
    return (
      <div className={`item ${props.className}`}>
        <img className="thumnal" src={props.image} alt="This is thumnal"/>
        <div className="footer">
          <img className="avatar" src={props.avatar} alt="This is avatar"/>
          <div className="infor">
            <h3 className="title">{props.title || "This is title"}</h3>
            <label className="author">{props.author || "This is author"}</label>
          </div>
        </div>
      </div>
    );
};

export default YoutubeItem;