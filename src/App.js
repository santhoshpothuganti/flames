
import './App.css';
import { useState } from 'react';

export default function  App() {
  const [first,setFirst] = useState("");
  const [second,setSecond] = useState("");
  const [result,setResult] = useState(null);

  function getRelation(ch) {
    switch (ch) {
      case 'F': return "friends";
      case 'L': return "lovers";
      case 'A': return "affectionate";
      case 'M': return "married";
      case 'E': return "enemies";
      case 'S': return "Sisters";
      default: return "undefined";
    }
  }
  function flamesGame(a, b) {
    let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let index = 0;
    let length = 0;
    const arr1 = new Array(26).fill(0);
    const arr2 = new Array(26).fill(0);
  
    let s1 = a.toLowerCase();
    let s2 = b.toLowerCase();
  
    for (let ch of s1) {
      arr1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let ch of s2) {
      arr2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      length += Math.abs(arr1[i] - arr2[i]);
    }
    
    if (length === 0) {
      setResult(`${a} and ${b} are ${getRelation('k')}`); // Directly handle the case where both inputs are the same
      return;
    }
  
    while (flames.length > 1) {
      index = (index + length - 1) % flames.length;
      flames.splice(index, 1);
    }
    
    let check = flames[0];
    setResult(`${a} and ${b} are ${getRelation(check)}`);
  }
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    flamesGame(first,second);
  }

  return (
    <div>
      <h1>
        Your Relation with your partner is in my hands!
      </h1>
      <form onSubmit = {handleSubmit}>
        <div>
          <label>Input 1:</label>
          <input
          type = "text"
          value = {first}
          onChange = {(e)=>setFirst(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label>Input 2:</label>
          <input
          type = "text"
          value = {second}
          onChange = {(e)=>setSecond(e.target.value)}
          >
          </input>
        </div>
        <button type = "submit">Submit</button>
      </form>
      {result &&(
        <div>
          <p>{result}</p>
        </div>
      )}
    </div>
  );

}


