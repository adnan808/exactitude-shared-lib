import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, HydratedDocument, Document } from 'mongoose';
import { Profile } from './profile.schema';
import { FieldsIdentity } from './fields-identity.schema';
import { Upload } from './upload.schema';

export type MoveDocument = HydratedDocument<Move>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Move extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Upload', required: true })
  upload: Upload;

  @Prop({ type: Types.ObjectId, ref: 'Profile' })
  profile: Profile;

  @Prop({ type: Types.ObjectId, ref: 'FieldsIdentity', required: true })
  field_identity: FieldsIdentity;

  @Prop({ type: String })
  old_value: string;

  @Prop({ type: String })
  new_value: string;

  @Prop({ type: Boolean, required: true })
  approved: boolean;

  @Prop({ type: Boolean, required: true })
  implemented: boolean;

  @Prop({ type: Date })
  implemented_at: Date;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const MoveSchema = SchemaFactory.createForClass(Move);
