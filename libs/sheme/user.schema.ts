import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Document } from 'mongoose';
import { Profile } from './profile.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class ListSubDoc extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Profile' }] })
  profiles: Profile[];

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  _id: false,
})
export class NoteSubDoc extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Profile' })
  profiles: Profile;

  @Prop({ type: String })
  note: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class User extends Document {
  @Prop({ type: String, required: true, unique: true })
  sub: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: Number, required: true })
  role: number;

  @Prop({ type: ListSubDoc })
  lists: ListSubDoc[];

  @Prop({ type: Boolean, required: true, default: true })
  isActive: boolean;

  @Prop({ type: NoteSubDoc })
  notes: NoteSubDoc[];

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
