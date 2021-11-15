import { Routes, Route, Navigate } from "react-router-dom";
import { Icon } from "@rsuite/icons";
import Sidenav from "rsuite/Sidenav";
import Nav from "rsuite/Nav";
import Container from "rsuite/Container";
import {
  BsSpeedometer2,
  BsPeopleFill,
  BsApple,
  BsBoxSeam,
} from "react-icons/bs";
import Header from "components/Header";
import NavToggle from "components/NavToggle";
import { readFromLS } from "utils/LocalStorage";
// Authenticated Route
import Users from "containers/Users/Lazy";
import Applications from "containers/Applications/Lazy";
import Ownerships from "containers/Ownerships/Lazy";
import NotFound from "containers/404/Lazy";
import { HeadTitleWrapper, Content, StyledSidebar } from "./styles";
import AuthManager from "./AuthManager";

const Auth: React.FC = () => {
  const { handleNavigate, setExpandMemo, expandMemo, expand, pathname } =
    AuthManager();

  // Push To Login Page if user is not authenticated
  if (!readFromLS("YS_Auth")) return <Navigate to="/login" />;

  return (
    <div className="app-wrapper">
      <Container>
        <StyledSidebar width={expand ? 260 : 56} collapsible>
          <div className="side-top">
            <Sidenav.Header>
              <HeadTitleWrapper>
                <Icon as={BsSpeedometer2} style={{ fontSize: "2em" }} />
                <span style={{ marginLeft: 12 }}>
                  {expand ? "Yegane Soft" : ""}
                </span>
              </HeadTitleWrapper>
            </Sidenav.Header>
            <Sidenav
              expanded={expand}
              defaultOpenKeys={["3"]}
              appearance="subtle"
            >
              <Sidenav.Body>
                <Nav>
                  <Nav.Item
                    active={pathname === "/users"}
                    onClick={() => handleNavigate("/users")}
                    eventKey="2"
                    icon={<Icon as={BsPeopleFill} />}
                  >
                    Users
                  </Nav.Item>
                  <Nav.Item
                    active={pathname === "/apps"}
                    onClick={() => handleNavigate("/apps")}
                    eventKey="2"
                    icon={<Icon as={BsApple} />}
                  >
                    Applications
                  </Nav.Item>
                  <Nav.Item
                    active={pathname === "/owners"}
                    onClick={() => handleNavigate("/owners")}
                    eventKey="3"
                    icon={<Icon as={BsBoxSeam} />}
                  >
                    Ownerships
                  </Nav.Item>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </div>
          <NavToggle
            expand={expandMemo}
            onChange={() => setExpandMemo(!expand)}
          />
        </StyledSidebar>
        <Container>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Navigate to="/users" />} />
              <Route path="users" element={<Users />} />
              <Route path="apps" element={<Applications />} />
              <Route path="owners" element={<Ownerships />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
        </Container>
      </Container>
    </div>
  );
};

export default Auth;
