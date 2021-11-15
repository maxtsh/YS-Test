import { useCallback, useState, FormEvent, SyntheticEvent } from "react";
import { nanoid } from "nanoid";
import { useStore } from "store/Store";
import type { UserData } from "utils/global/types";

const UsersManager = (userId: string | undefined) => {
  const { addUser, updateUser, getUser } = useStore();
  const user: UserData | undefined = userId ? getUser(userId) : undefined;
  const [form, setForm] = useState<UserData>(
    user || {
      id: nanoid(),
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      birthDay: new Date(Date.now()).toLocaleString(),
    }
  );
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeVissible = () => {
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

  const handleBirthDay = (v: Date, event: SyntheticEvent<Element, Event>) => {
    setForm({ ...form, birthDay: v.toLocaleString() });
  };

  const clearForm = useCallback(() => {
    setForm({
      id: nanoid(),
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      birthDay: new Date(Date.now()).toLocaleString(),
    });
  }, []);

  const handleSubmit = (
    checkStatus: boolean,
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (user) {
      updateUser(form);
    } else {
      addUser(form);
    }
    clearForm();
    handleClose();
  };

  return {
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
  };
};
export default UsersManager;
