import { Document, Schema, Types, HydratedDocument } from 'mongoose';
import { User } from "./user.schema";
import {Profile} from "./profile.schema";

export class Tag extends Document {
  user: User;
  profiles: Profile[];
  name: string;
  created_at: Date;
  updated_at: Date;
}

const TagSchema = new Schema<Tag>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  name: String,
  created_at: Date,
  updated_at: Date,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

export type TagDocument = HydratedDocument<Tag>;