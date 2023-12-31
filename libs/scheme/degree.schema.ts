import { HydratedDocument, Document, Schema } from 'mongoose';

export class Degree extends Document {
  degree_names: string[];
  degree_name: string;
  created_at: Date;
  updated_at: Date;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'degrees'
};

const degreeSchema = new Schema({
  degree_names: [String],
  degree_name: String,
  created_at: Date,
  updated_at: Date,
}, options);

export const DegreeSchema = degreeSchema;

export type DegreeDocument = HydratedDocument<Degree>;