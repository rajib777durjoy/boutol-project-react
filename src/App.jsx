import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boutol from './component/boutol'
import "./component/Boutol.css"


// category
// : 
// "Bottle"
// id
// : 
// "9e7cda87-8160-458f-bd32-ecf253a2d86a"
// img
// : 
// "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg"
// name
// : 
// "Steel Metal Bottle 1L"
// price
// : 
// 33
// quantity
// : 
// 0
// ratings
// : 
// 4
// ratingsCount
// : 
// 62
// seller
// : 
// "Addidas"
// shipping
// : 
// 15
// stock
// : 
// 7

function App() {
  const [boutolId,setboutol]=useState([])

  const [getdata,setdata]=useState([])

  const [count, setcount]=useState(0)

   useEffect(()=>{
     fetch('../public/Boutol.json')
     .then(res=>res.json())
     .then(data=>setboutol(data))
   },[])
   const handelfun=(boutolDatas)=>{
    let dataArray=[...getdata ,boutolDatas]
     setdata(dataArray)
     setcount(count+1)
   }
  return (
    <>
     <h1>{count}</h1>
     <div className='boutol2'>
       
       {
        getdata.map(event=><div className='childdiv'>
          <li>name:{event.name}</li>
          <img src={event.img} alt="" className='childImg'/>
          <li>price:{event.price}</li>
        </div>)

      }
   
     </div>
     <br />
     <hr />
     <br />
      <div className='boutol'>
      {
        boutolId.map((e)=><Boutol datas={e} handelfun={handelfun}></Boutol>)
      }
      </div>
      <h1>boutol card project</h1>
      
     
    </>
  )
}

export default App
