import { Document, Schema, HydratedDocument } from 'mongoose';

export class SuggestedGeography extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
}

export const SuggestedGeographySchema = new Schema<SuggestedGeography>(
  {
    name: { type: String, unique: true },
    created_at: Date,
    updated_at: Date,
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    collection: 'suggested_geography',
  },
);

export type SuggestedGeographyDocument = HydratedDocument<SuggestedGeography>;
