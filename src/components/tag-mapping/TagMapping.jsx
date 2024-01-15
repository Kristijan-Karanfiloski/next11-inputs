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
  const [newInputDiv, setNewInputDiv] = useState([]);

  const addNewInputDiv = () => {
    setNewInputDiv((prevInput) => [...prevInput,1]);
  };

  const handleDeleteInputDiv=()=>{
      setNewInputDiv(current => current.filter((_, index) =>index !== 0));
  }

  const handleOpenTagMapping = () => {
    setTagMappingOpen(isOpen=>!isOpen);
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
            {newInputDiv.map((_, index) => (
              <InputDiv key={index}  />
            ))}
          </div>
          <div className="main-text">
            <button onClick={addNewInputDiv} className="add-newBtn">
              Add new
            </button>
            <p>Select file to add tags</p>
            <p onClick={handleDeleteInputDiv} className='delete-inputDiv'>Delete tags</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TagMapping;
