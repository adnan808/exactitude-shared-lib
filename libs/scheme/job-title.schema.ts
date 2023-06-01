import { HydratedDocument, Document, Schema } from "mongoose";

export class JobTitle extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
}

export const JobTitleSchema = new Schema<JobTitle>(
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

export type JobTitleDocument = HydratedDocument<JobTitle>;