import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteFromLS } from "utils/LocalStorage";
import { getHeaderName } from "utils/functions";
import IconButton from "rsuite/IconButton";
import { StyledHeader } from "./styles";

const HeaderComponet: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSignOut = () => {
    deleteFromLS("YS_Auth");
    navigate("/login");
  };

  return (
    <StyledHeader>
      <h4>{getHeaderName(pathname)}</h4>
      <IconButton
        appearance="ghost"
        onClick={handleSignOut}
        className="sign-out-btn"
      >
        <span style={{ textAlign: "center" }}>Sign out</span>
      </IconButton>
    </StyledHeader>
  );
};
export default memo(HeaderComponet);
