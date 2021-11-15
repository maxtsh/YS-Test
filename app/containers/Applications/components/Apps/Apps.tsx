import { BsPencil } from "react-icons/bs";
import Modal from "rsuite/Modal";
import Form from "rsuite/Form";
import Button from "rsuite/Button";
import ButtonToolbar from "rsuite/ButtonToolbar";
import IconButton from "rsuite/IconButton";
import { Container } from "./styles";
import AppsManager from "./AppsManager";

interface AppProps {
  appId?: string;
}

const Apps: React.FC<AppProps> = ({ appId }) => {
  const {
    handleFormChange,
    handleSubmit,
    handleOpen,
    handleClose,
    open,
    form,
    app,
  } = AppsManager(appId);

  return (
    <Container className="modal-container">
      <ButtonToolbar>
        {app ? (
          <IconButton
            onClick={handleOpen}
            appearance="subtle"
            icon={<BsPencil size={20} color="#3498ff" />}
          />
        ) : (
          <Button appearance="primary" onClick={handleOpen}>
            New App
          </Button>
        )}
      </ButtonToolbar>
      <Modal overflow size="xs" open={open} onClose={handleClose}>
        <Form
          fluid
          formValue={form}
          className="modal-form"
          onSubmit={handleSubmit}
        >
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="name">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control
                id="name"
                name="name"
                value={form.name}
                placeholder="Enter app name..."
                size="lg"
                type="text"
                onChange={handleFormChange}
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" appearance="primary">
              {app ? "Edit App" : "Add App"}
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Apps;
