import JASONDATA from "./MOCK_DATA.json";
import {useState} from 'react';
//import { Card } from "react-bootstrap";

function Dashboard() {
  const [searchTerm, setSearchTerm]  = useState("")

  return (
    
    <div className="app">
    <input 
    type="text" 
    placeholder="Search..." 
    onChange={(event)=>{
      setSearchTerm(event.target.value)
    }}
    />
    {JASONDATA.filter((val)=>{
      if (searchTerm ===""){
        return val
      }
      else if(val["Product Name"].toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((val, key)=>{
      return(
      <div className="user" key={key}>
        
        <p> {val["Product Name"]} </p>
        <p> {val["Price"]} </p>
        <img 
        style={{width:180, height:190}} 
        src={val["IMAGE"]} />
        
        </div>
      )
    })}
   </div>

   
  )
  }

export default Dashboard
