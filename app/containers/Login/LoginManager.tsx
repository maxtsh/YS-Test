import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toaster } from "rsuite";
import { writeToLS, readFromLS } from "utils/LocalStorage";
import { UserData } from "utils/global/types";
import Toast from "components/Toast";

interface FormType {
  email: string | undefined;
  pass: string | undefined;
}

const LoginManager = () => {
  const [form, setForm] = useState<FormType>({ email: "", pass: "" });
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    return () => toaster.clear();
  }, []);

  const handleChange = () => {
    setVisible(!visible);
  };

  const handleFormChange = (
    v: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value, name },
    } = e;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): null => {
    e.preventDefault();
    // Existing users
    const users: UserData[] = readFromLS("users") || [];
    if (!form.email && !form.pass) {
      toaster.push(<Toast msg="Please enter credentials..." />, {
        placement: "topEnd",
      });
      return null;
    }

    // Check if login credentials match any user
    if (users.length > 0) {
      const isAuthenticated = users.some(
        (u) => u.email === form.email && u.password === form.pass
      );
      if (isAuthenticated) {
        writeToLS(true, "YS_Auth");
        navigate("/");
        return null;
      }
    }

    // Default credentials
    if (form.email === "admin@gmail.com" && form.pass === "admin") {
      writeToLS(true, "YS_Auth");
      navigate("/");
      return null;
    } else {
      toaster.push(<Toast msg="Authentication failed..." />, {
        placement: "topEnd",
      });
      return null;
    }
  };

  return { handleChange, handleFormChange, handleSubmit, form, visible };
};

export default LoginManager;
