import { HydratedDocument, Document, Schema } from "mongoose";

export class EndUser extends Document {
  sub: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'end_users',
};

const endUserSchema = new Schema(
  {
    sub: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    isActive: { type: Boolean, required: true, default: true },
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export const EndUserSchema = endUserSchema;

export type EndUserDocument = HydratedDocument<EndUser>;