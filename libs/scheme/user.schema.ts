import { HydratedDocument, Document, Schema } from 'mongoose';

export class User extends Document {
  sub: string;
  email: string;
  firstName: string;
  lastName: string;
  role: number;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'users',
};

const userSchema = new Schema(
  {
    sub: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    role: { type: Number, required: true },
    isActive: { type: Boolean, required: true, default: true },
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export const UserSchema = userSchema;

export type UserDocument = HydratedDocument<User>;
