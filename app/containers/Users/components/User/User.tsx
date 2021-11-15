import { BsEyeFill, BsEyeSlashFill, BsPencil } from "react-icons/bs";
import Modal from "rsuite/Modal";
import Form from "rsuite/Form";
import DatePicker from "rsuite/DatePicker";
import Button from "rsuite/Button";
import ButtonToolbar from "rsuite/ButtonToolbar";
import IconButton from "rsuite/IconButton";
import Input from "rsuite/Input";
import InputGroup from "rsuite/InputGroup";
import { Container } from "./styles";
import UserManager from "./UserManager";

interface UserProps {
  userId?: string;
}

const User: React.FC<UserProps> = ({ userId }) => {
  const {
    handleFormChange,
    handleChangeVissible,
    handleBirthDay,
    handleOpen,
    handleClose,
    handleSubmit,
    form,
    user,
    open,
    visible,
  } = UserManager(userId);

  return (
    <Container className="modal-container">
      <ButtonToolbar>
        {user ? (
          <IconButton
            onClick={handleOpen}
            appearance="subtle"
            icon={<BsPencil size={20} color="#3498ff" />}
          />
        ) : (
          <Button appearance="primary" onClick={handleOpen}>
            New User
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
            <Form.Group controlId="firstName">
              <Form.ControlLabel>First Name</Form.ControlLabel>
              <Form.Control
                id="firstName"
                name="firstName"
                value={form.firstName}
                placeholder="Enter your firstname..."
                size="lg"
                type="text"
                onChange={handleFormChange}
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.ControlLabel>Last Name</Form.ControlLabel>
              <Form.Control
                id="lastName"
                name="lastName"
                value={form.lastName}
                placeholder="Enter your lastname..."
                size="lg"
                type="text"
                onChange={handleFormChange}
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Input
                id="email"
                name="email"
                value={form.email}
                placeholder="Enter your email..."
                size="lg"
                type="text"
                onChange={handleFormChange}
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <InputGroup inside className="modal-inputgroup">
              <Input
                name="password"
                placeholder="Enter your password..."
                size="lg"
                value={form.password}
                type={visible ? "text" : "password"}
                onChange={handleFormChange}
              />
              <InputGroup.Button onClick={handleChangeVissible}>
                {visible ? (
                  <BsEyeFill size={15} />
                ) : (
                  <BsEyeSlashFill size={15} />
                )}
              </InputGroup.Button>
            </InputGroup>
            <Form.Group controlId="birthDay" style={{ marginTop: "1rem" }}>
              <Form.ControlLabel>Birthday</Form.ControlLabel>
              <DatePicker
                size="lg"
                placeholder="Large"
                style={{ width: "100%" }}
                id="birthDay"
                name="birthDay"
                value={new Date(form.birthDay)}
                onChange={handleBirthDay}
              />
              <Form.HelpText></Form.HelpText>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" appearance="primary">
              {user ? "Edit User" : "Add User"}
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

export default User;
