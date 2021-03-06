import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Chat } from './chat.model';
import { ChatMessage } from './chatMessage.model';
import { User } from './user.model';

@Table
export class ChatPartipant extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Chat)
  @Column
  chatId: number;

  @BelongsTo(() => Chat)
  chat: Chat;

  @ForeignKey(() => ChatMessage)
  @Column
  lastReadMessageId: number;

  @BelongsTo(() => ChatMessage)
  lastReadMessage: ChatMessage;
}
