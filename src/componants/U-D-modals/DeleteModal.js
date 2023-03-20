import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Image from 'react-bootstrap/Image';




function DeleteModal(props) {
  const deleteMovie = async (e) => {

    e.preventDefault();
    const serverURL = `${process.env.REACT_APP_serverURL}/delete/${props.item.id}`;
    const axiosRes = await axios.delete(serverURL);
    props.closeDeleteModal();
    props.takeNewArrFromChild(axiosRes.data);
    
  }

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
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="submit" onClick={deleteMovie}>
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