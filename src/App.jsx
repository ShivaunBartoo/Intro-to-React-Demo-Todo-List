/*
This is our main page that renders all our components.

It might seem redundant to have an App component that just renders a
single TodoList, but we can imagine that on a more complex layout, there might 
be many more Components, like navbars, footers, etc on the page as well. 

This is where we'd put it all together. 

Notes:
- Keep UI and logic in child components under /src/components.
- This component is mounted by src/main.jsx into the HTML mount node (#root).
*/

import './App.css'
import TodoList from './components/TodoList/TodoList.jsx'
export default function App() {

  return (
    <main>
      <TodoList/>
    </main>
  )
}
