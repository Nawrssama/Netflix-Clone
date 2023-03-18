import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Image from 'react-bootstrap/Image';




function DeleteModal(props) {



  const deleteMovie = async (e) => {
    e.preventDefault();
    const obj = {
      title: e.target.title.value,
      poster_path: e.target.poster_path.value,
      release_date: e.target.release_date.value,
      overview: e.target.overview.value,
      comment: e.target.comment.value
    }
    // console.log(props.item.id)
    const serverURL = `https://movies-library-production-a000.up.railway.app/delete/${props.item.id}`;
    const axiosRes = await axios.delete(serverURL, obj);
    console.log(axiosRes.data);
    props.closeDeleteModal();

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
    <Modal show={props.deleteFlag} onHide={props.closeDeleteModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={deleteMovie}>
        <Image src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`} width='100%'></Image>
        <p>{props.item.title}</p>
        <p>{props.item.release_date}</p>
        <p>{props.item.overview}</p>
        <p>{props.item.comment}</p>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"  type="submit" onClick={deleteMovie}>
          Delete this movie
        </Button>
        <Button variant="secondary" onClick={props.closeDeleteModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal;