import { HydratedDocument, Document, Schema } from 'mongoose';
import { Language } from './language.schema';

export class City extends Document {
  name: string;
  names: [string];
  created_at: Date;
  updated_at: Date;
}

class Country extends Document {
  name: string;
  names: [string];
  languages: [Language];
  cities: [City];
  created_at: Date;
  updated_at: Date;
}

const CitySchema = new Schema<City>({
  name: String,
  names: [String],
  created_at: Date,
  updated_at: Date,
});

const CountrySchema = new Schema<Country>({
  name: String,
  names: [String],
  languages: [{ type: Schema.Types.ObjectId, ref: 'Language' }],
  cities: [CitySchema],
  created_at: Date,
  updated_at: Date,
});

export type CountryDocument = HydratedDocument<Country>;

export { CountrySchema, Country };
