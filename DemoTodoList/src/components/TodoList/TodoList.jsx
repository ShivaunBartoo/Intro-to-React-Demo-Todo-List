/*
This component is our main TodoList, where all our smaller components come together. 
*/
import { useState } from 'react'
import "./TodoList.css"
import ListItem from '../ListItem/ListItem'

  // function generates a unique ID for each ListItem.
  // In a real app, you might use a library like uuid, or a backend would supply IDs,
  // but Date.now will work fine here for demonstration purposes.
  const getUid = () => Date.now();

export default function TodoList() {
  //useState is an extremely common React Hook that lets us add state to our components.
  //more info: https://react.dev/learn/state-a-components-memory

  // We're using useState here to hold an array of unique IDs representing each ListItem.
  const [listItems, setListItems] = useState([getUid()]);

  // This function deletes an item from the list with a given uid.
  // It is passed as a prop to each ListItem. This is called "lifting state".
  // more info: https://react.dev/learn/sharing-state-between-components 
  const handleDelete = (id) => 
  {
    //If you know how to use JS closures, you could use one here to avoid passing the id as a prop. (if not, don't worry about it)
    setListItems(prev => prev.filter(key => key !== id));
  }

  //This function adds a new ListItem to our TodoList. 
  //It works by adding a new uid to our state, representing a new ListItem.
  //When we call listItems.map below, React creates a <ListItem> for each uid.
  const handleAdd = () => 
  {
    //You might be wondering why we dont just listitems.push. In React, we should treat state as immutable.
    //We always create a new copy of the state with the changes we want, and setState to that new copy.
    //This is because React uses state changes to know when to re-render components. 
    //If we mutate state directly, React will not detect the change, and our UI will go out of sync with our data.
    setListItems(prev => [...prev, getUid()]);
  }

  //Every React component must return some JSX to render.
  return (
    <div className="TodoList">
      <div className="Title">Todo</div>
      <div className="ListContainer">
        {//Using array.map is a common way to render a list of components in React.
         //more info: https://react.dev/learn/rendering-lists
        listItems.map((key) =>
          <ListItem
            key={key}
            id={key}                 
            handleDelete={handleDelete}
          />
        )}
        <button className={"AddButton material-icons"} onClick={handleAdd}>add</button>
      </div>
    </div>
  )
}

