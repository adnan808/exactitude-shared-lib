import { Types, HydratedDocument, Document, Schema } from 'mongoose';
import { FieldsIdentity } from './fields-identity.schema';
import { Profile } from './profile.schema';
import { ScrapperJob } from './scrapper-job.schema';

export class StatusChange extends Document {
  user: Schema.Types.ObjectId | null;
  status: number;
  created_at: Date;
}

export class Move extends Document {
  scrapper_job: ScrapperJob;
  profile: Profile;
  field_identity: FieldsIdentity;
  old_value: string;
  new_value: string;
  array_positions: string;
  status: number;
  status_changes: StatusChange[];
  implemented: boolean;
  implemented_at: Date;
  created_at: Date;
  updated_at: Date;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'moves',
};

export const MoveSchema = new Schema(
  {
    scrapper_job: {
      type: Schema.Types.ObjectId,
      ref: 'ScrapperJob',
    },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
    field_identity: {
      type: Schema.Types.ObjectId,
      ref: 'FieldsIdentity',
      required: true,
    },
    old_value: String,
    new_value: String,
    array_positions: String,
    status: Number,
    status_changes: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        status: Number,
        created_at: Date,
      },
    ],
    implemented: { type: Boolean, required: true, default: false },
    implemented_at: Date,
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export type MoveDocument = HydratedDocument<Move>;
