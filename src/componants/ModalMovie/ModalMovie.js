
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ModalMovie(props) {

    const [addComment, setaddComment] = useState('');
    function handleComment(e){
        setaddComment(e.target.value)
    }

    
        
    

    const postData = async () => {
        await fetch('https://movies-library-production-a000.up.railway.app/addMovie', {
            method: 'POST',
            body: JSON.stringify({
                title: props.clickedMovie.title,
                release_date: props.clickedMovie.release_date,
                overview: props.clickedMovie.overview,
                poster_path: props.clickedMovie.poster_path,
                comment: addComment
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
        })
    }


    return (
        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.clickedMovie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={`https://image.tmdb.org/t/p/w500/${props.clickedMovie.poster_path}`} width='100%'></Image>
                <p>{props.clickedMovie.overview}</p>
                <div>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>comment</Form.Label>
                        <Form.Control as="textarea" onChange={handleComment} rows={3} />
                    </Form.Group>


                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    alert('added to favorite succesfully')
                    postData();
                }}>
                    add to favorite
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMovie;