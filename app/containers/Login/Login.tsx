import { Navigate } from "react-router-dom";
import { Input, InputGroup, Button, ButtonToolbar } from "rsuite";
import Eye from "@rsuite/icons/EyeClose";
import EyeSlash from "@rsuite/icons/Gear";
import { Container, Card } from "./styles";
import { readFromLS } from "utils/LocalStorage";
import LoginManager from "./LoginManager";

const Login: React.FC = () => {
  const { handleChange, handleFormChange, handleSubmit, form, visible } =
    LoginManager();

  // Push To Home Page if user is authenticated
  if (readFromLS("YS_Auth")) return <Navigate to="/" />;

  return (
    <Container>
      <Card>
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="card-header">
            <h1 className="card-header-title">Login</h1>
            <p>Email: admin@gmail.com</p>
            <p>Pass: admin</p>
          </div>
          <div className="card-body">
            <InputGroup inside className="card-body-inputgroup">
              <Input
                name="email"
                value={form.email}
                placeholder="Enter your email..."
                size="lg"
                type="text"
                onChange={handleFormChange}
              />
            </InputGroup>
            <InputGroup inside className="card-body-inputgroup">
              <Input
                name="pass"
                placeholder="Enter your password..."
                size="lg"
                value={form.pass}
                type={visible ? "text" : "password"}
                onChange={handleFormChange}
              />
              <InputGroup.Button onClick={handleChange}>
                {visible ? <Eye /> : <EyeSlash />}
              </InputGroup.Button>
            </InputGroup>
          </div>
          <div className="card-footer">
            <ButtonToolbar className="card-footer-iconbutton">
              <Button
                className="card-footer-iconbutton-btn"
                appearance="primary"
                size="lg"
                type="submit"
              >
                Sign in
              </Button>
            </ButtonToolbar>
          </div>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
