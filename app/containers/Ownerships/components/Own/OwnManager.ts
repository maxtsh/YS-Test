import { useCallback, useState, FormEvent, SyntheticEvent } from "react";
import { nanoid } from "nanoid";
import { useStore } from "store/Store";
import type { OwnershipData } from "utils/global/types";

const OwnerManager = (ownerId: string | undefined) => {
  const { addOwnership, updateOwnership, getOwnerShip, users, apps } =
    useStore();
  const ownership: OwnershipData | undefined = ownerId
    ? getOwnerShip(ownerId)
    : undefined;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [form, setForm] = useState<OwnershipData>(
    ownership || {
      id: nanoid(),
      userId: "",
      appId: "",
      status: "Owned",
      registerDate: new Date(Date.now()).toLocaleString(),
    }
  );

  const handleAddApp = (v: any, e: SyntheticEvent<Element, Event>) => {
    setForm({ ...form, appId: v });
  };

  const handleAddUser = (v: any, e: SyntheticEvent<Element, Event>) => {
    setForm({ ...form, userId: v });
  };

  const clearForm = useCallback(() => {
    setForm({
      id: nanoid(),
      userId: "",
      appId: "",
      status: "Owned",
      registerDate: new Date(Date.now()).toLocaleString(),
    });
  }, []);

  const handleSubmit = (
    checkStatus: boolean,
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (ownership) {
      updateOwnership(form);
    } else {
      addOwnership(form);
    }
    clearForm();
    handleClose();
  };

  return {
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
  };
};

export default OwnerManager;
