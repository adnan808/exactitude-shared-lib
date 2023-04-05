import { Types, HydratedDocument, Document, Schema } from 'mongoose';
import { FieldsIdentity } from "./fields-identity.schema";
import { Profile } from "./profile.schema";
import { ScrapperJob } from './scrapper-job.schema';

export class Move extends Document {
  scrapper_job: ScrapperJob;
  profile: Profile;
  field_identity: FieldsIdentity;
  old_value: string;
  new_value: string;
  approved: boolean;
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
  collection: 'moves'
};

export const MoveSchema = new Schema({
  scrapper_job: { type: Schema.Types.ObjectId, ref: 'ScrapperJob', required: true },
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  field_identity: { type: Schema.Types.ObjectId, ref: 'FieldsIdentity', required: true },
  old_value: String,
  new_value: String,
  approved: { type: Boolean, required: true },
  implemented: { type: Boolean, required: true },
  implemented_at: Date,
  created_at: Date,
  updated_at: Date,
}, options);

export type MoveDocument = HydratedDocument<Move>;
