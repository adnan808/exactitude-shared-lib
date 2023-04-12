import { HydratedDocument, Document, Schema } from 'mongoose';

export class CompanySubType extends Document {
  _id: string;
  name: string;
}

export const CompanySubTypeSchema = new Schema({
  _id: String,
  name: String,
});
export type CompanySubTypeDocument = HydratedDocument<CompanyType>;

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
    name: String,
    subtypes: [CompanySubTypeSchema],
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export type CompanyTypeDocument = HydratedDocument<CompanyType>;
