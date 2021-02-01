import { useState } from 'react';


// input that will take a string 
//on enter with sumit button text will be saved in a state
//show the inputs as a list on the screen in sorted format 

//if there is a duplicate entry increment the same with count - String +1 ex: Apple 2

//input box which will take a text string value
//save the value in a state - value, setValue
//display the input value as list - setList
//when new input, sort the list - list setList & display with increment if exists


function App() {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const addToList = () =>
  {
    if(list.includes(value)) {
      setCount(count+1);
      let newList = list.filter((item, index) => list.indexOf(item) === index);
      console.log("new list is" + newList);
       setList(newList);
       return { list, count } ;
    }
    setList([...list, value]);
  }

  return ( 
    <>
      <input type="text" onChange={(e) => {
          setValue(e.target.value);
          console.log("value is" + value);
          }
          }/>
      <button onClick={addToList}>Save</button>
      <ul>
        {
          list.map(l => (
           <li> {l} {count && list.includes(l) ? count : ""} </li>
        ))
      }
      </ul>
    </>
  );
}

export default App;
