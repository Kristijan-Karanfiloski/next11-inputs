import "./TagMapping.css";
import { useState } from "react";

const InputDiv = () => (
  <>
    <div className="tag-inputs1">
      <p>Mac</p>
      <input />
    </div>
    <div className="tag-inputs2">
      <p>ID</p>
      <input />
      <p>X</p>
    </div>
  </>
);

const TagMapping = () => {
  const [tagMappingOpen, setTagMappingOpen] = useState(true);
  const [newInputDiv, setNewInputDiv] = useState(1);

  const addNewInputDiv = () => {
    setNewInputDiv((prevInput) => prevInput + 1);
  };

  const handleOpenTagMapping = () => {
    setTagMappingOpen(!tagMappingOpen);
  };

  return (
    <>
      <div className="topContainer">
        <p>Tag mapping</p>
        <button className="openTagMappingBtn" onClick={handleOpenTagMapping}>
          {tagMappingOpen ? "+" : "-"}
        </button>
      </div>
      {!tagMappingOpen && (
        <div className="bottomContainer">
          <p>No Tags</p>
          <div className="middleSection">
            {[...Array(newInputDiv)].map((_, index) => (
              <InputDiv key={index} />
            ))}
          </div>
          <div className="main-text">
            <button onClick={addNewInputDiv} className="add-newBtn">
              Add new
            </button>
            <p>Select file to add tags</p>
            <p>Delete tags</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TagMapping;
