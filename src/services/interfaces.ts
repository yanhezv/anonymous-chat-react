export enum ChatType {
   Group   = 'GROUP',
   Private = 'PRIVATE',
}

export interface IUser {
   id?: number;
   nick: string;
}

export interface IGroup {
   id?: number;
   name: string;
   chat_id: number;
}

export interface IChat {
   id?: number;
   name: string;
   type: ChatType | string;
}

export interface IMessage {
   id?: number;
   message: string;
   nick: string;
   chat_id: number;
}

export interface IUserChat {
   id?: number;
   user_id: number;
   chat_id: number;
}
