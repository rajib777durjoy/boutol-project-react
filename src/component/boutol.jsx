


const Boutol = ({datas,handelfun}) => {
   const {category,id,img,name,price}=datas
    return (
        <div style={{border:'2px solid yellow',width:'300px',height:'400px'}}>
           <li>Categroy:{category}</li> 
           <li>id:{id}</li> 
           <img style={{width:'70%',height:"60%",marginLeft:"auto",marginRight:"auto"}} src={img} alt="" />
           <li>Name :{name}</li> 
           <li>Price :{price}</li>
           <button onClick={()=>handelfun(datas)}>Priview</button>
        </div>
    );
};

export default Boutol;