import { useCallback, useState } from "react";
import { useStore } from "store/Store";
import type { ValueType } from "rsuite/Checkbox";
import type { ApplicationData, UserData } from "utils/global/types";

const OwnerShipsManager = () => {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
  const {
    deleteAllOwnerships,
    grantOwnership,
    revokeOwnership,
    ownerships,
    getUser,
    getApp,
  } = useStore();

  const handleCheckAll = useCallback(
    (value: ValueType, checked: boolean) => {
      const keys: string[] = checked ? ownerships.map((user) => user.id) : [];
      setCheckedKeys(keys);
    },
    [ownerships]
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

  const newOwnershipData = ownerships.map((os) => {
    const app: ApplicationData | undefined = getApp(os.appId);
    const user: UserData | undefined = getUser(os.userId);
    return {
      ...os,
      appId: app ? app.name : os.appId,
      userId: user ? user.firstName : os.userId,
    };
  });

  return {
    deleteAllOwnerships,
    grantOwnership,
    revokeOwnership,
    handleCheckAll,
    handleCheck,
    ownerships,
    checkedKeys,
    newOwnershipData,
  };
};

export default OwnerShipsManager;
