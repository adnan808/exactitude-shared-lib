import { HydratedDocument, Document, Schema, Types } from 'mongoose';
import { Country } from './country.schema';

export class Education extends Document {
  name: string;
  logo: string;
  names: string[];
  country: Country;
  created_at: Date;
  updated_at: Date;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'educations'
};

const educationSchema = new Schema({
  name: String,
  logo: String,
  names: [String],
  country: { type: Schema.Types.ObjectId, ref: 'Country' },
  created_at: Date,
  updated_at: Date,
}, options);

export const EducationSchema = educationSchema;

export type EducationDocument = HydratedDocument<Education>;