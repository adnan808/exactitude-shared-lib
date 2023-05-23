import { HydratedDocument, Document, Schema } from 'mongoose';

export class SuggestedCoverage extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
}

export const SuggestedCoverageSchema = new Schema<SuggestedCoverage>(
  {
    name: { type: String, unique: true },
    created_at: Date,
    updated_at: Date,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    collection: 'suggested_coverage',
  },
);

export type SuggestedCoverageDocument = HydratedDocument<SuggestedCoverage>;
