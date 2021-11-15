export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDay: string;
}

export interface OwnershipData {
  id: string;
  userId: string;
  appId: string;
  status: "Owned" | "Revoked";
  registerDate: string;
}

export interface ApplicationData {
  id: string;
  name: string;
  thumbnail: string;
}
