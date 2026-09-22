import React, { use, useState } from 'react'

// function Counter() {
//     const [count,setCount] = useState(0);
//     const [toggle,setToggle] = useState(false);
//     const [name,setName] = useState('');
//     const [result,setResult] = useState('');
//   
//   return (
//     <>
//     <h2>Number:{count}</h2>
//     <button onClick={() => setCount(count+5)}>Increase</button>
//     <button onClick={() => setCount(count-2)}>Decrease</button>
//     <h2>Toggle:{toggle ? "On": "Off"}</h2>
//     <button onClick={() => setToggle(!toggle)}>toggle</button>
//     <h2>Name:{result}</h2>
//     <input value={name} onChange={(e) => setName(e.target.value)}/>
//   <button onClick={() => setResult(name)}>
//         Enter
//       </button>
//     </>
//   )
// }

// export default Counter

function DemoState() {
    const [user,setUser] = useState({name:"Loan",age:20});
    const ChangeAge = () =>
    {
        setUser({... user,
             age:user.age+2,})
    }
    return (
    <div>{user.age}

        <button onClick={() => {ChangeAge()}}>Increase</button>
    </div>
    
  )
}

export default DemoState