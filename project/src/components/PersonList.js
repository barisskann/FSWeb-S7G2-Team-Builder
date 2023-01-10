import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function PersonList(params) {
  let { array, setValue, value, setCheck, setDeger, setArray } = params;
  const handleEditClick = (item, e) => {
    setValue({ ...value, [e.target.id]: item });
    setCheck(e.target.id);
    setDeger(item);
  };
  const handleRemoveClick = (item) => {
    setArray(
      array.filter((sayac) => {
        return item.id !== sayac.id;
      })
    );
  };
  const render = array.map((item, sayac) => {
    return (
      <div key={sayac} className="list">
        <div className="list-delete">
          <AiFillDelete
            className="delete"
            onClick={(e) => handleRemoveClick(item)}
          />
        </div>

        <div className="list-item">
          <div> Front End: {item.frontEnd}</div>
          <div onClick={(e) => handleEditClick(item.frontEnd, e)}>
            <AiFillEdit className="edit" id="frontEnd" />
          </div>
        </div>
        <div className="list-item">
          <div>Back End: {item.backEnd} </div>
          <div onClick={(e) => handleEditClick(item.backEnd, e)}>
            <AiFillEdit className="edit" id="backEnd" />{" "}
          </div>
        </div>
        <div className="list-item">
          <div> Stajyer engineer:{item.yeni} </div>
          <div onClick={(e) => handleEditClick(item.yeni, e)}>
            <AiFillEdit className="edit" id="yeni" />{" "}
          </div>
        </div>
      </div>
    );
  });
  return <div className="main-container" >{render}</div>;
}
export default PersonList;
