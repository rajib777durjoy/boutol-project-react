

let getItemfun=()=>{
    let card = localStorage.getItem("phone");
    if(card){
       return JSON.parse(card)
    }
    return [];
}
 let SetItemsfun=(data)=>{
   let itemData=getItemfun()
    itemData.push(data)
  let stringify=JSON.stringify(itemData)
  localStorage.setItem("phone",stringify)
  // console.log(getItemfun())
 }
 let removefun=(model)=>{
  let totalarr=getItemfun();
 let removeData=totalarr.filter((p)=>p[1]!== model)
 let string=JSON.stringify(removeData);
 localStorage.setItem("phone",string)
 }
 export {SetItemsfun,getItemfun,removefun}