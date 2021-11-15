import { BsPencil } from "react-icons/bs";
import Modal from "rsuite/Modal";
import Form from "rsuite/Form";
import Button from "rsuite/Button";
import ButtonToolbar from "rsuite/ButtonToolbar";
import IconButton from "rsuite/IconButton";
import { Container } from "./styles";
import SelectPicker from "rsuite/SelectPicker";
import OwnManager from "./OwnManager";

interface OwnershipProps {
  ownerId?: string;
}

const Own: React.FC<OwnershipProps> = ({ ownerId }) => {
  const {
    handleAddApp,
    handleAddUser,
    handleSubmit,
    handleOpen,
    handleClose,
    ownership,
    form,
    open,
    users,
    apps,
  } = OwnManager(ownerId);

  return (
    <Container className="modal-container">
      <ButtonToolbar>
        {ownership ? (
          <IconButton
            onClick={handleOpen}
            appearance="subtle"
            icon={<BsPencil size={20} color="#3498ff" />}
          />
        ) : (
          <Button appearance="primary" onClick={handleOpen}>
            New Ownership
          </Button>
        )}
      </ButtonToolbar>
      <Modal overflow size="md" open={open} onClose={handleClose}>
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
            <Form.Group controlId="appId">
              <Form.ControlLabel>Select App</Form.ControlLabel>
              <SelectPicker
                data={apps.map((app) => ({ label: app.name, value: app.id }))}
                id="appId"
                name="appId"
                value={form.appId}
                placeholder="Select an application..."
                size="lg"
                style={{ width: "100%" }}
                onChange={handleAddApp}
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="userId">
              <Form.ControlLabel>Select User</Form.ControlLabel>
              <SelectPicker
                data={users.map((user) => ({
                  label: user.firstName,
                  value: user.id,
                }))}
                id="userId"
                name="userId"
                value={form.userId}
                placeholder="Select a user..."
                size="lg"
                style={{ width: "100%" }}
                onChange={handleAddUser}
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" appearance="primary">
              {ownership ? "Edit Ownership" : "Add Ownership"}
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

export default Own;
