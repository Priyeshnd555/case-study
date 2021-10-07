import { useState } from "react";
import { Modal,Button} from "react-bootstrap";

function Modals() {
  const [smShow, setSmShow] = useState(false);


  return (
    <>
      <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
     
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...
          <button>Ok</button>
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default Modals