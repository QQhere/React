import React from 'react';
import { Data } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
    return (
        <div className="list">
          {props.children}
          {Data.map((item, index) => {
            let newClass = '';
            if (index === 1) newClass = 'abc';
            return (
              <YoutubeItem
                key={item.id}
                image={item.image}
                avatar={item.avatar}
                title={item.title || "This is title"}
                author={item.author}
                className= {newClass}
              ></YoutubeItem>
            );
          })}
        </div>
    );
};

export default YoutubeList;