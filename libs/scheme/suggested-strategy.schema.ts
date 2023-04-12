import { Document, Schema, HydratedDocument } from 'mongoose';

export class Substrategy extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
}

const SubstrategySchema = new Schema<Substrategy>({
  name: String,
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
    name: String,
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
