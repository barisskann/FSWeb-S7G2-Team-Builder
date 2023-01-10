import "./components/app.css";
import { useState } from "react";
import PersonList from "./components/PersonList";

function App() {
  const [value, setValue] = useState({
    frontEnd: "",
    backEnd: "",
    yeni: "",
    id: Math.round(Math.random() * 99999),
  });
  const [array, setArray] = useState([]);
  const [check, setCheck] = useState(0);
  const [deger, setDeger] = useState(1);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (check) {
      array.filter((item) => {
        if (deger === item[check]) {
          item[check] = value[check];
        }
      });
    } else {
      setArray([...array, value]);
    }
    setDeger(0);
    setCheck(0);
    setValue({
      frontEnd: "",
      backEnd: "",
      yeni: "",
      id: Math.round(Math.random() * 99999),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-item">
        <div>
          <p>Front End: </p>
          <input id="frontEnd" onChange={handleChange} value={value.frontEnd} />
        </div>
        <div>
          <p>Back End: </p>
          <input id="backEnd" onChange={handleChange} value={value.backEnd} />
        </div>
        <div>
          <p>Stajyer engineer: </p>
          <input id="yeni" onChange={handleChange} value={value.yeni} />
        </div>
        <button className="btn">CLİCK THİS BUTTON</button>
      </div>
      <PersonList
        setCheck={setCheck}
        setValue={setValue}
        value={value}
        array={array}
        setArray={setArray}
        setDeger={setDeger}
      />
    </form>
   
  );
}

export default App;
