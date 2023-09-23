import React, { useState } from "react";
import X from "./X";

function Border() {
  const [number, setnumber] = useState(Array(9).fill(null));
  console.log("number is ", number);
  const [isTrue, setTrue] = useState(true);

  //-------------- Winner Logic--------------//
  const chechwinner = () => {
    const indexNumber = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]; 
    for (let logic of indexNumber) {
      const [a, b, c] = logic;
      if (number[a] != null && number[a] === number[b] &&  number[a] === number[c]) {
        return number[a];
      }
    }
    return false;
  };
  const Iswinner = chechwinner();
  //-----------------------------------//

  //-----------Play Again-------------//
  const PlayAgain=()=>{
    setnumber(Array(9).fill(null))
  }
  //---------------------------------//

  const handlecheck = (index) => {
    if(number[index]!==null){
      return;
    }
    console.log(index);
    const copy = [...number];
    copy[index] = isTrue ? "❌" : "🧿";
    setnumber(copy);
    setTrue(!isTrue);
  };
  return (
    <>
      <div className="border">
        {Iswinner ? (
          <> Player {Iswinner} Winners<button onClick={PlayAgain}> Play Again</button></>
        ) : (
          <>
          
          
            <div className="square-box">
              <X onClick={() => handlecheck(0)} value={number[0]} />
              <X onClick={() => handlecheck(1)} value={number[1]} />
              <X onClick={() => handlecheck(2)} value={number[2]} />
            </div>
            <div className="square-box">
              <X onClick={() => handlecheck(3)} value={number[3]} />
              <X onClick={() => handlecheck(4)} value={number[4]} />
              <X onClick={() => handlecheck(5)} value={number[5]} />
            </div>
            <div className="square-box">
              <X onClick={() => handlecheck(6)} value={number[6]} />
              <X onClick={() => handlecheck(7)} value={number[7]} />
              <X onClick={() => handlecheck(8)} value={number[8]} />
            </div>
            <button onClick={PlayAgain} className="Reset">Reset Your Game </button>
          </>
        )}
      </div>
    </>
  );
}

export default Border;
