import { HydratedDocument, Document, Schema, Types } from 'mongoose';
import { Language } from './language.schema';

export class City extends Document {
  name: string;
  names: [String];
  created_at: Date;
  updated_at: Date;
}

export class Country extends Document {
  name: string;
  names: [String];
  languages: [Language];
  cities: [City];
  created_at: Date;
  updated_at: Date;
}

const citySchema = new Schema({
  name: String,
  names: [String],
  created_at: Date,
  updated_at: Date,
});

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'countries'
};

const countrySchema = new Schema({
  name: String,
  names: [String],
  languages: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
  cities: [citySchema],
  created_at: Date,
  updated_at: Date,
}, options);

export const CountrySchema = countrySchema;

export type CountryDocument = HydratedDocument<Country>;