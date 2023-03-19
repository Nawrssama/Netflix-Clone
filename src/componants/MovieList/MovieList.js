import Movie from "../Movie/Movie";
import Row from 'react-bootstrap/Row';



function MovieList(props){

    

    return (
        <div className="my-4" >
        <Row xs={1} md={4} className="g-4">
        {props.newArr.map((item)=>{
            return <Movie a={item}/>
        })}
        </Row>
        </div>
    )
}

export default MovieList;