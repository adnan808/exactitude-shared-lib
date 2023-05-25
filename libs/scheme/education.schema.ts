import { HydratedDocument, Document, Schema } from 'mongoose';
import { Country } from './country.schema';

export class Education extends Document {
  name: string;
  logo: string;
  names: string[];
  country: Country;
  region: string;
  created_at: Date;
  updated_at: Date;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'educations',
};

const educationSchema = new Schema(
  {
    name: { type: String, unique: true, index: true },
    logo: String,
    names: [{ type: String, unique: true, index: true }],
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    region: String,
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export const EducationSchema = educationSchema;

export type EducationDocument = HydratedDocument<Education>;
