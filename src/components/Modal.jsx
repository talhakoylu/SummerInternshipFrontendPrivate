import React from "react";
import {Modal as BModal} from "react-bootstrap";

export default function Modal({children, title, show, handleClose}) {
  return (
      <BModal show={show} onHide={handleClose}>
        <BModal.Header closeButton>
          <BModal.Title>{title}</BModal.Title>
        </BModal.Header>
        <BModal.Body>{children}</BModal.Body>
      </BModal>
  );
}