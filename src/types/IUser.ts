

 interface IUser {
    _id?:string,
    name: string;
    surname?: string;
    email:string,
    password:string|number|any
  }

export default IUser;