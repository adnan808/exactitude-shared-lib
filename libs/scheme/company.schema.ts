import { HydratedDocument, Document, Schema } from 'mongoose';
import { CompanyType } from './company-type.schema';

export class Company extends Document {
  name: string;
  company_type: CompanyType;
  company_subtype: Schema.Types.ObjectId;
  logo: string;
  website_url: string;
  email_format: string;
  names: string[];
  linkedin_url: string;
  is_in_house: boolean;
  created_at: Date;
  updated_at: Date;
}

const dateSubDocSchema = new Schema({
  month: Number,
  year: Number,
});

const periodSubDocSchema = new Schema({
  start: dateSubDocSchema,
  end: dateSubDocSchema,
});

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'companies',
};

export const CompanySchema = new Schema<Company>(
  {
    name: { type: String, unique: true, index: true },
    company_type: { type: Schema.Types.ObjectId, ref: 'CompanyType' },
    company_subtype: Schema.Types.ObjectId,
    logo: String,
    website_url: String,
    email_format: String,
    names: [{ type: String, unique: true, index: true }],
    linkedin_url: String,
    is_in_house: Boolean,
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export type CompanyDocument = HydratedDocument<Company>;
