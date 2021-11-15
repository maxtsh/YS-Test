import { useCallback, useState } from "react";
import { useStore } from "store/Store";
import type { ValueType } from "rsuite/Checkbox";

const AppManager = () => {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const { deleteApp, deleteAllApps, apps } = useStore();

  const handleCheckAll = useCallback(
    (value: ValueType, checked: boolean) => {
      const keys: string[] = checked ? apps.map((user) => user.id) : [];
      setCheckedKeys(keys);
    },
    [apps]
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
    deleteApp,
    deleteAllApps,
    handleCheck,
    handleCheckAll,
    checkedKeys,
    apps,
  };
};
export default AppManager;
