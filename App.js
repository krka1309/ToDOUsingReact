import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [inputList, setinputList] = useState("")
  const [listitem, setListItem] = useState([])
  const[editTodo,seteditTodo]=useState(null);

  const deleteItem = () => {
    console.log("Item")
    setListItem((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index
      })
    })
  }
  
  const listofItems = () => {
    setListItem((olditem) => {

      if (!inputList) {
        return [...olditem]
      } else
        return [...olditem, inputList];
    });

    setinputList("");
  }
  const handleEdit=(id)=>{
    // const filteredItem=listofItems.filter(arrElem=>arrElem.id !== id);
    const selectedItem = listofItems.find(arrElem=>arrElem.id===id);
    console.log(selectedItem)
  }
  
  return (
    <div className="App">
      <div className='Inner-Class'>
        <h1 className='Header'> ToDO List Using React </h1><br />
        <input type="text" placeholder='Add An Item' value={inputList} onChange={(e) => setinputList(e.target.value)} />
        <button onClick={listofItems} className="button2">+</button>
        
        {/* <ol className='olist'> */}

        {/* <li className='list'> {inputList}</li> */}
        {
          listitem.map((listitem, index) => {
            return <ToDoList
              key={index}
              id={index}
              text={listitem}
              onSelect={deleteItem}
              seteditTodo={handleEdit}
              
            />
          })
        }

        {/* </ol> */}

      </div>
    </div>
  );
}

export default App;
