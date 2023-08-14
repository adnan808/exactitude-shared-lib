import { HydratedDocument, Document, Schema } from 'mongoose';

export class SubCoverage extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
  sequence_value: number;
}

const SubCoverageSchema = new Schema<SubCoverage>({
  name: { type: String, unique: true, index: true },
  created_at: Date,
  updated_at: Date,
  sequence_value: { type: Number, default: 0 },
});
export class SuggestedCoverage extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
  subCoverages: SubCoverage[];
}

export const SuggestedCoverageSchema = new Schema<SuggestedCoverage>(
  {
    name: { type: String, unique: true, index: true },
    created_at: Date,
    updated_at: Date,
    subCoverages: [SubCoverageSchema],
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
