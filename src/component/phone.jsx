


const Phone = (props) => {
   const {brand,model,handelfun,card,removefun}=props
    return (
        <div>
            <h5>Card-length:{card}</h5>
            <br />
            <button onClick={()=>handelfun(brand,model)}>Add to Card</button>
            <button onClick={()=>removefun(model)}>delete</button>
        </div>
    );
};


export default Phone;