import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { writeToLS, readFromLS, deleteFromLS } from "utils/LocalStorage";
import type {
  UserData,
  ApplicationData,
  OwnershipData,
} from "utils/global/types";

interface StoreProviderProps {
  store: StoreInstance;
}

class StoreInstance {
  users: UserData[] = readFromLS("users") || [];
  apps: ApplicationData[] = readFromLS("apps") || [];
  ownerships: OwnershipData[] = readFromLS("ownerships") || [];

  constructor() {
    makeAutoObservable(this);
  }

  // Internal Method to find user index
  private getUserIndex = (id: string): number => {
    return this.users.findIndex((u) => u.id === id);
  };

  private getAppIndex = (id: string): number => {
    return this.apps.findIndex((a) => a.id === id);
  };

  private getOwnershipIndex = (id: string): number => {
    return this.ownerships.findIndex((o) => o.id === id);
  };

  addUser = (userData: UserData): void => {
    this.users.push(userData);
    writeToLS(this.users, "users");
  };

  getUser = (id: string): UserData | undefined => {
    return this.users.find((u) => u.id === id);
  };

  updateUser = (newUserData: UserData): void => {
    const userIndex = this.getUserIndex(newUserData.id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1, newUserData);
      writeToLS(this.users, "users");
    }
  };

  deleteUser = (id: string): void => {
    const userIndex = this.getUserIndex(id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      writeToLS(this.users, "users");
    }
  };

  deleteAllUsers = (keys: string[]): void => {
    this.users = this.users.filter((user) => {
      if (keys.some((k) => k === user.id)) return false;
      return true;
    });
    writeToLS(this.users, "users");
  };

  // Applications

  addApp = (appData: ApplicationData): void => {
    this.apps.push(appData);
    writeToLS(this.apps, "apps");
  };

  updateApp = (newAppData: ApplicationData): void => {
    const appIndex = this.getAppIndex(newAppData.id);
    if (appIndex !== -1) {
      this.apps.splice(appIndex, 1, newAppData);
      writeToLS(this.apps, "apps");
    }
  };

  getApp = (id: string): ApplicationData | undefined => {
    return this.apps.find((u) => u.id === id);
  };

  deleteApp = (id: string): void => {
    const appIndex = this.getAppIndex(id);
    if (appIndex !== -1) {
      this.apps.splice(appIndex, 1);
      writeToLS(this.apps, "apps");
    }
  };

  deleteAllApps = (keys: string[]): void => {
    this.apps = this.apps.filter((app) => {
      if (keys.some((k) => k === app.id)) return false;
      return true;
    });
    writeToLS(this.apps, "apps");
  };

  // Ownerships

  addOwnership = (ownershipData: OwnershipData): void => {
    this.ownerships.push(ownershipData);
    writeToLS(this.ownerships, "ownerships");
  };

  updateOwnership = (newOwnershipData: OwnershipData): void => {
    const ownIndex = this.getOwnershipIndex(newOwnershipData.id);
    if (ownIndex !== -1) {
      this.ownerships.splice(ownIndex, 1, newOwnershipData);
      writeToLS(this.ownerships, "ownerships");
    }
  };

  getOwnerShip = (id: string): OwnershipData | undefined => {
    return this.ownerships.find((u) => u.id === id);
  };

  revokeOwnership = (id: string): void => {
    const ownIndex = this.getOwnershipIndex(id);
    if (ownIndex !== -1) {
      this.ownerships[ownIndex].status = "Revoked";
      writeToLS(this.ownerships, "ownerships");
    }
  };

  grantOwnership = (id: string): void => {
    const ownIndex = this.getOwnershipIndex(id);
    if (ownIndex !== -1) {
      this.ownerships[ownIndex].status = "Owned";
      writeToLS(this.ownerships, "ownerships");
    }
  };

  deleteAllOwnerships = (keys: string[]): void => {
    this.ownerships = this.ownerships.filter((os) => {
      if (keys.some((k) => k === os.id)) return false;
      return true;
    });
    writeToLS(this.ownerships, "ownerships");
  };
}

const store = new StoreInstance();
const storeContext = createContext<StoreInstance>(store);
const storeProvider: React.FC<StoreProviderProps> = ({ store, children }) => {
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

const useStore = () => useContext(storeContext);

export { store, storeProvider, useStore };
