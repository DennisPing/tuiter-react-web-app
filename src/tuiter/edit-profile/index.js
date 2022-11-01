import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";

const EditProfileComponent = ({ show, handleClose }) => {
  const profile = useSelector((state) => state.profile);
  console.log(profile);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header onClick={handleClose} className="d-flex">
        {/* <div className="d-flex align-items-center"> */}
        <CloseButton className="ms-0 me-4" />
        <Modal.Title className="h5 fw-bold">Edit Profile</Modal.Title>
        <Button variant="primary" onClick={handleClose} className="rounded-pill fw-bold ms-auto">
          Save
        </Button>
        {/* </div> */}
      </Modal.Header>
      <Modal.Body>{"Woohoo, you're reading this text in a modal!"}</Modal.Body>
    </Modal>
  );
};

EditProfileComponent.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default EditProfileComponent;
