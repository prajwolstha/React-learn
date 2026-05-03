function ProcuctCard(props){
    return(
        <div className="product-card">
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.rating}</p>
        </div>
    );
}
export default ProcuctCard;