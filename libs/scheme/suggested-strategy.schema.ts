import { Document, Schema, HydratedDocument } from 'mongoose';

export class Substrategy extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
}

const SubstrategySchema = new Schema<Substrategy>({
  name: { type: String, unique: true, index: true },
  created_at: Date,
  updated_at: Date,
});

export class SuggestedStrategy extends Document {
  name: string;
  substrategies: Substrategy[];
  created_at: Date;
  updated_at: Date;
}

export const SuggestedStrategySchema = new Schema<SuggestedStrategy>(
  {
    name: { type: String, unique: true, index: true },
    substrategies: [SubstrategySchema],
    created_at: Date,
    updated_at: Date,
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    collection: 'suggested_strategy',
  },
);

export type SuggestedStrategyDocument = HydratedDocument<SuggestedStrategy>;
