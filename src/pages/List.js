import React from "react";

const List = () => {
  return (
    <div id="list">
      <div id="titleList">
        <h1>Voyage</h1>
      </div>
      <div id="content-list">
        <div id="leftContent" className="listBoxes">
          <div className="cadre1">
            <div className="cadre2">
              <h1>To do</h1>
            </div>
          </div>
        </div>
        <div id="rightContent" className="listBoxes">
          <div className="cadre1" id="cadre1">
            <div className="cadre2" id="cadre2">
              <h1>Done</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
