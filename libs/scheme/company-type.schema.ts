import { HydratedDocument, Document, Schema } from 'mongoose';

export class CompanySubType extends Document {
  _id: string;
  name: string;
}

const companySubTypeSchema = new Schema({
  _id: String,
  name: String,
});

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'company_types'
};

export class CompanyType extends Document {
  name: string;
  subtypes: CompanySubType[];
  created_at: Date;
  updated_at: Date;
}

export const CompanyTypeSchema = new Schema<CompanyType>({
  name: String,
  subtypes: [companySubTypeSchema],
  created_at: Date,
  updated_at: Date,
}, options);

export type CompanyTypeDocument = HydratedDocument<CompanyType>;