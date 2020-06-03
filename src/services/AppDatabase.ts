import Dexie from "dexie";
import { IUser, IChat, IMessage, IGroup, IUserChat } from "./interfaces";

export class AppDatabase extends Dexie {

   public users: Dexie.Table<IUser, number>;
   public groups: Dexie.Table<IGroup, number>;
   public chats: Dexie.Table<IChat, number>;
   public messages: Dexie.Table<IMessage, number>;
   public userChats: Dexie.Table<IUserChat, number>;

   constructor() {
      super("AnonymousChat");

      this.version(1).stores({
         users: '++id, nick',
         groups: '++id, name, chat_id',
         chats: '++id, name, type',
         messages: '++id, message, nick, chat_id',
         userChats: '++id, user_id, chat_id',
      });

      this.open();

      this.users     = this.table("users");
      this.groups    = this.table("groups");
      this.chats     = this.table("chats");
      this.messages  = this.table("messages");
      this.userChats = this.table("userChats");
   }
}
