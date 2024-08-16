import { useEffect, useRef, useState } from "react"
import Navbar from "./component/Navbar"
import Todolist from "./component/Todolist"
 
function App() {
  const [todolist , setTodoList] = useState( localStorage.getItem("todo") ? 
  JSON.parse(localStorage.getItem("todo")) :[])
  
  const inputref = useRef();
  
  const handelAdd = ()=>{
    const inputText = inputref.current.value.trim();
    
    if(inputText === ""){
      return null;
    }
    const newTodo = {
      id : Date.now(),
      text : inputText,
      isComplete : false
    }
    setTodoList((prev) => [...prev, newTodo])
    inputref.current.value = ''
    
  }
  const deleteTodo = (id)=>{
    setTodoList((prev) =>{
      return prev.filter((todo) => todo.id !== id)
    })
  }
  const toggle = (id)=>{
    setTodoList((prev) =>{
      return prev.map((todo) =>{
        if(todo.id === id){
          return {...todo , isComplete : !todo.isComplete}
        }
        return todo;
      })
    })
  } 
  useEffect(()=>{
    localStorage.setItem("todo" , JSON.stringify(todolist))
  },[todolist])
  return (
    <>
      <Navbar/>
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
        <div className=" flex justify-center items-center">
          <h1 className=" text-3xl font-bold">iTask</h1>
        </div>

        <div className="flex items-center bg-gray-50 rounded-full my-7">
          <input ref={inputref} className="bg-transparent  border-0
           outline-none flex-1 h-14 px-6 " type="text" placeholder="Add your task" />
          <button onClick={handelAdd} className=" border-none outline-none bg-blue-800 rounded-full h-14 w-24 text-white text-lg">Add</button>
        </div>

        <div>
          {todolist.map((item, index) =>{
            return <Todolist key ={index} text ={item.text } toggle = {toggle} deleteTodo ={deleteTodo} id ={item.id} isComplete ={item.isComplete} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
