import { Document, Schema, HydratedDocument } from 'mongoose';
import { Profile } from './profile.schema';
import { EndUser } from './end-user.schema';

export class Tag extends Document {
  user: EndUser;
  profiles: Profile[];
  name: string;
  created_at: Date;
  updated_at: Date;
}

export const TagSchema = new Schema<Tag>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
    name: String,
    created_at: Date,
    updated_at: Date,
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

export type TagDocument = HydratedDocument<Tag>;
