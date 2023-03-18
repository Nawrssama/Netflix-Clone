import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import UpdateModal from "../U-D-modals/UpdateModal";
import DeleteModal from "../U-D-modals/DeleteModal";




function FavList() {


    const [favArr, setfavArr] = useState([]);
    const sendReq = async () => {
        const serverURL = `https://movies-library-production-a000.up.railway.app/mymovies`;
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data);
        setfavArr(data);


    }

    useEffect(() => {
        sendReq()
    }, [])

    const [clickedMovie , setClickedMovie] = useState({})
    const [showFlag, setShowFlag] = useState(false)
    const handleShow = () => {
        setShowFlag(true);
    }

    const [updateFlag, setupdateFlag] = useState(false)
    const showUpdateModal = (item)=>{
        setupdateFlag(true);
        setClickedMovie(item);
        console.log(item);
    }

    const closeUpdateModal = ()=>{
        setupdateFlag(false);
        
    }


    const handleclose = (item) => {
        setShowFlag(false);
        setClickedMovie(item);
    }


    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {favArr.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.overview}</p>

                                </Card.Text>
                                <Button variant="outline-primary" onClick={() => {handleShow(item)}}>more options</Button>{' '}
                                {/* <Button variant="outline-success" onClick={() => {showUpdateModal(item)}}>Update</Button>{' '}
                                <Button variant="outline-danger">Delete</Button>{' '} */}

                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>


            <Modal show={showFlag} onHide={handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>{clickedMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={`https://image.tmdb.org/t/p/w500/${clickedMovie.poster_path}`} width='100%'></Image>
                    <p>{clickedMovie.overview}</p>
                    <div>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Comments"
                            className="mb-3"
                        >
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleclose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* <UpdateModal updateFlag = {updateFlag} closeUpdateModal = {closeUpdateModal} item = {clickedMovie}/> */}
            {/* <DeleteModal /> */}
        </>


    )
}

export default FavList;