import { HydratedDocument, Document, Schema } from 'mongoose';

export class Gender extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
}

export const GenderSchema = new Schema<Gender>(
  {
    name: { type: String, unique: true },
    created_at: Date,
    updated_at: Date,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export type GenderDocument = HydratedDocument<Gender>;
