import { useCallback, useState, FormEvent, SyntheticEvent } from "react";
import { useStore } from "store/Store";
import { nanoid } from "nanoid";
import type { ApplicationData } from "utils/global/types";

const AppsManager = (appId: string | undefined) => {
  const { addApp, updateApp, getApp } = useStore();
  const app: ApplicationData | undefined = appId ? getApp(appId) : undefined;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [form, setForm] = useState<ApplicationData>(
    app || {
      id: nanoid(),
      name: "",
      thumbnail: "https://source.unsplash.com/random/200*200",
    }
  );

  const handleFormChange = (
    v: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value, name },
    } = e;
    setForm({ ...form, [name]: value });
  };

  const clearForm = useCallback(() => {
    setForm({
      id: nanoid(),
      name: "",
      thumbnail: "",
    });
  }, []);

  const handleSubmit = (
    checkStatus: boolean,
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (app) {
      updateApp(form);
    } else {
      addApp(form);
    }
    clearForm();
    handleClose();
  };

  return {
    handleFormChange,
    handleSubmit,
    handleOpen,
    handleClose,
    open,
    form,
    app,
  };
};
export default AppsManager;
