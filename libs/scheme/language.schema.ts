import { HydratedDocument, Document, Schema } from 'mongoose';

export class Language extends Document {
  name: string;
  names: string[];
  created_at: Date;
  updated_at: Date;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'languages',
};

const languageSchema = new Schema(
  {
    name: { type: String, unique: true, index: true },
    names: [{ type: String, unique: true, index: true }],
    proficiency: String,
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export const LanguageSchema = languageSchema;

export type LanguageDocument = HydratedDocument<Language>;
