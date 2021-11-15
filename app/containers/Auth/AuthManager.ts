import { useCallback, useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { readFromLS, writeToLS } from "utils/LocalStorage";

const AuthManager = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isExpanded: "yes" | "no" | null = readFromLS("side-expand");
  const [expand, setExpand] = useState<boolean>(
    isExpanded ? isExpanded === "yes" : true
  );

  const expandMemo = useMemo(() => expand, [expand]);
  const setExpandMemo = useCallback((val: boolean) => {
    writeToLS(val ? "yes" : "no", "side-expand");
    setExpand(val);
  }, []);

  const handleNavigate = useCallback(
    (route: string): null => {
      if (pathname === route) return null;
      navigate(route);
      return null;
    },
    [pathname]
  );

  return { handleNavigate, setExpandMemo, expandMemo, expand, pathname };
};
export default AuthManager;
