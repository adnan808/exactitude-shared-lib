import { HydratedDocument, Document, Schema } from 'mongoose';
import { User } from './user.schema';

export class Upload extends Document {
  name: string;
  researcher: User;
  type: number;
  created_at: Date;
  updated_at: Date;
}

export const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'uploads',
};

export const UploadSchema = new Schema(
  {
    name: String,
    researcher: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: Number, required: true },
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export type UploadDocument = HydratedDocument<Upload>;
