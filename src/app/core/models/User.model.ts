import {HandleNullPipe} from "@cc/pipes/handle-null.pipe";

export class User {
  username: string;
  token: string;
  role: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar: string;

  constructor(
    {
      username = '',
      token = '',
      role = '',
      firstName = '',
      lastName = '',
      password = '',
      avatar = '',
    }) {
    this.username = username;
    this.token = token;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.avatar = avatar;
  }

  public static populate(data: {}) {
    return new User(data);
  }
}
