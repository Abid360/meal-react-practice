import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = (props) => {
  //   console.log(props.meals);
  const { idMeal, strMeal, strMealThumb, strInstructions } = props.meals;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{strMeal}</Modal.Title>
          <p> Id: {idMeal}</p>
          <img className="w-50" src={strMealThumb} alt="" />
        </Modal.Header>
        <Modal.Body>{strInstructions}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactModal;
