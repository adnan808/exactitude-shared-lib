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
    names: [String],
    proficiency: String,
    created_at: Date,
    updated_at: Date,
  },
  options,
);

languageSchema.index(
  { names: 1 },
  {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    unique: true,
    partialFilterExpression: {
      names: { $type: 'string' },
    },
  },
);

export const LanguageSchema = languageSchema;

export type LanguageDocument = HydratedDocument<Language>;
