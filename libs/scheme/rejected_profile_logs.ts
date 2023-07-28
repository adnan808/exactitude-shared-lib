import { HydratedDocument, Document, Schema } from 'mongoose';
import { Profile } from './profile.schema';
import { Upload } from './upload.schema';

export class RejectedProfileLogs extends Document {
  profile: Profile;
  created_at: Date;
  updated_at: Date;
  upload_details: Upload;
  reason: string;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'rejected_profiles_logs',
};

export const RejectedProfileLogsSchema = new Schema(
  {
    upload_details: {
      type: Schema.Types.ObjectId,
      ref: 'Upload',
      index: true,
    },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile', index: true },
    created_at: { type: Date, index: true },
    updated_at: Date,
    reason: { type: String },
  },
  options,
);

/*MoveSchema.index(
  { profile: 1, field_identity: 1, status: 1, array_positions: 1 },
  {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    unique: true,
  },
);*/

export type RejectedProfileLogsDocument = HydratedDocument<RejectedProfileLogs>;
