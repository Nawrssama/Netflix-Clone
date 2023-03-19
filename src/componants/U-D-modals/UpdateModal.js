import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



function UpdateModal(props) {

    const updateMovie = async (e) => {
        e.preventDefault();
        const obj = {
            title: e.target.title.value,
            poster_path: e.target.poster_path.value,
            release_date: e.target.release_date.value,
            overview: e.target.overview.value,
            comment: e.target.comment.value
        }
        // console.log(props.item.id)
        const serverURL = `https://movies-library-production-a000.up.railway.app/update/${props.item.id}`;
        const axiosRes = await axios.put(serverURL, obj);
        console.log(axiosRes.data);
        props.closeUpdateModal();
        console.log(obj);
        //update old favorite arr
        props.takeNewArrFromChild(axiosRes.data);

    }
    // const [favArr, setfavArr] = useState([]);
    // const sendReq = async () => {
    //     const serverURL = `https://movies-library-production-a000.up.railway.app/mymovies`;
    //     const response = await fetch(serverURL);
    //     const data = await response.json();
    //     console.log(data);
    //     setfavArr(data);


    // }

    // useEffect(() => {
    //     sendReq()
    // }, [])

    return (
        <Modal show={props.updateFlag} onHide={props.closeUpdateModal} className='nawrs'>
            <Modal.Header closeButton>
                <Modal.Title>Update form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateMovie}>
                    <Form.Group className="mb-3" >
                        <Form.Label>title</Form.Label>
                        <Form.Control name='title' type="text" placeholder="add a new title" defaultValue={props.item.title} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>release date</Form.Label>
                        <Form.Control name='release_date' type="text" placeholder="add a new date" defaultValue={props.item.release_date} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>image path</Form.Label>
                        <Form.Control name='poster_path' type="text" placeholder="add a new image" defaultValue={props.item.poster_path} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>overview</Form.Label>
                        <Form.Control name='overview' type="text" placeholder="add a new overview" defaultValue={props.item.overview} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>comment</Form.Label>
                        <Form.Control name='comment' type="text" placeholder="add a new comment" defaultValue={props.item.comment} />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeUpdateModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default UpdateModal;