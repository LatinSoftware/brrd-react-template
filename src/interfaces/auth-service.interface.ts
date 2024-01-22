export interface AuthApiLogin {
  username: string;
  password: string;
  appcode: string;
}

export interface AuthProfileActionModel {
  Name: string;
  Code: string;
}

export interface AuthUserProfileModel {
  Name: string;
  Description: string;
  Transactions: AuthProfileActionModel[];
}

export interface AuthApiUserModel {
  Id: number;
  AppCode: string;
  UserCode: string;
  FullName: string;
  UserName: string;
  OfficeCode: string;
  Terminal: string;
  Profiles: AuthUserProfileModel;
}
