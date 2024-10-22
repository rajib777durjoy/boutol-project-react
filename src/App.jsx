import { useEffect, useState } from 'react'

import './App.css'
import Phone from './component/phone'
import { getItemfun, SetItemsfun,removefun} from './component/localStorage'



function App() {
   
  /// set phone data ///
  const [phoneData,setPhoneData]=useState([])

  const [cards,setcards]=useState([])
 
  /// get array of object to phone.json file ///
  useEffect(()=>{
    fetch('../public/phone.json')
    .then(respons=>{
      return respons.json()
    })
    .then(Details=>setPhoneData(Details))
  },[])
   

  useEffect(()=>{
    let saveData=[]
    if(phoneData.length>0){
    //  console.log(getItemfun())
     for(let item of getItemfun()){
      //  console.log(item[0])
       let result=phoneData.find((phone)=>phone.brand===item[0] && phone.model === item[1])
       if(result){
        saveData.push(result)
       }
     }
     setcards(saveData)
    }
   
  },[phoneData])
 



  const [storeArr,setStoreArr]=useState([])
  // click event function genarate ///
  const handelfun=(brand,model)=>{
    let arr=[brand,model]
    setStoreArr(arr)
   SetItemsfun(storeArr)
  }
  
  return (
    <>
     <div>
     
      {phoneData.map((event=><Phone brand={event.brand} model={event.model} handelfun={handelfun} card={cards.length} removefun={removefun}></Phone>))}
       
     </div>
    </>
  )
}

export default App
