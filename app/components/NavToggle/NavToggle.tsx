import { memo, useCallback } from "react";
import Nav from "rsuite/Nav";
import Navbar from "rsuite/Navbar";
import AngleLeft from "@rsuite/icons/ArrowRight";
import AngleRight from "@rsuite/icons/ArrowLeft";

interface NavToggleProps {
  expand: boolean;
  onChange?: (e: React.MouseEvent<HTMLElement>) => any;
}
const NavToggle: React.FC<NavToggleProps> = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
          {expand ? <AngleLeft /> : <AngleRight />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
export default memo(NavToggle);
