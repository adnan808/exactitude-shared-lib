import { Types, HydratedDocument, Document, Schema } from 'mongoose';
import { Profile } from "./profile.schema";

export class ListSubDoc extends Document {
  name: string;
  profiles: Profile[];
  created_at: Date;
  updated_at: Date;
}

export class NoteSubDoc extends Document {
  profiles: Profile;
  note: string;
  created_at: Date;
  updated_at: Date;
}

export class User extends Document {
  sub: string;
  email: string;
  firstName: string;
  lastName: string;
  role: number;
  lists: ListSubDoc[];
  isActive: boolean;
  notes: NoteSubDoc[];
  created_at: Date;
  updated_at: Date;
}

const listSubDocSchema = new Schema({
  name: String,
  profiles: [{ type: Types.ObjectId, ref: Profile.name }],
  created_at: Date,
  updated_at: Date,
});

const noteSubDocSchema = new Schema({
  profiles: { type: Types.ObjectId, ref: Profile.name },
  note: String,
  created_at: Date,
  updated_at: Date,
});

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'users'
};

const userSchema = new Schema({
  sub: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  role: { type: Number, required: true },
  lists: [listSubDocSchema],
  isActive: { type: Boolean, required: true, default: true },
  notes: [noteSubDocSchema],
  created_at: Date,
  updated_at: Date,
}, options);

export const UserSchema = userSchema;

export type UserDocument = HydratedDocument<User>;