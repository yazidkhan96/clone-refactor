const CardsCourse = ({picture,title,price,body}) => {
    return ( 
            <div className="card mx-4 me-5 border-2 rounded-3 shadow" style={{width: '18rem'}}>
                <img src={picture} className="card-img-top rounded" width="300" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text lead">{body}</p>
                    <p className="card-text fw-bold">{price}</p>
                </div>
            </div>
     );
}
 
export default CardsCourse;