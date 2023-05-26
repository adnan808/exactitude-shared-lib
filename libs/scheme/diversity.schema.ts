import { HydratedDocument, Document, Schema } from 'mongoose';

export class Diversity extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
}

const diversitySchema = new Schema(
  {
    name: { type: String, unique: true, index: true },
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

export const DiversitySchema = diversitySchema;

export type DiversityDocument = HydratedDocument<Diversity>;
