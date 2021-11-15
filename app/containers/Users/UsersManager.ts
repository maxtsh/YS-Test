import { useCallback, useState } from "react";
import { useStore } from "store/Store";
import type { ValueType } from "rsuite/Checkbox";

const UsersManager = () => {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const { deleteUser, deleteAllUsers, users } = useStore();

  const handleCheckAll = useCallback(
    (value: ValueType, checked: boolean) => {
      const keys: string[] = checked ? users.map((user) => user.id) : [];
      setCheckedKeys(keys);
    },
    [users]
  );

  const handleCheck = useCallback(
    (value: string, checked: boolean) => {
      const keys = checked
        ? [...checkedKeys, value]
        : checkedKeys.filter((item) => item !== value);
      setCheckedKeys(keys);
    },
    [checkedKeys]
  );

  return {
    handleCheckAll,
    handleCheck,
    deleteUser,
    deleteAllUsers,
    checkedKeys,
    users,
  };
};
export default UsersManager;
