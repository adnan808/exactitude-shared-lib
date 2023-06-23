import { HydratedDocument, Document, Schema } from 'mongoose';
import { CompanySchema } from './company.schema';

export class CompanySubType extends Document {
  _id: string;
  name: string;
}

export const CompanySubTypeSchema = new Schema(
  {
    name: { type: String },
  },
  { _id: true },
);
export type CompanySubTypeDocument = HydratedDocument<CompanyType>;

CompanySubTypeSchema.index(
  { name: 1 },
  {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    unique: true,
    partialFilterExpression: {
      names: { $type: 'string' },
    },
  },
);

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'company_types',
};

export class CompanyType extends Document {
  name: string;
  subtypes: CompanySubType[];
  created_at: Date;
  updated_at: Date;
}

export const CompanyTypeSchema = new Schema<CompanyType>(
  {
    name: { type: String, unique: true, index: true },
    subtypes: [CompanySubTypeSchema],
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export type CompanyTypeDocument = HydratedDocument<CompanyType>;
