import { Document, Schema, HydratedDocument } from 'mongoose';

export class SuggestedTeam extends Document {
  name: string;
  created_at: Date;
  updated_at: Date;
}

export const SuggestedTeamSchema = new Schema<SuggestedTeam>(
  {
    name: String,
    created_at: Date,
    updated_at: Date,
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    collection: 'suggested_team',
  },
);

export type SuggestedTeamDocument = HydratedDocument<SuggestedTeam>;
