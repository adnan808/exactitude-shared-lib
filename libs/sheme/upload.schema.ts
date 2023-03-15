import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Document } from 'mongoose';
import { User } from './user.schema';

export type UploadDocument = HydratedDocument<Upload>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Upload extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  researcher: User;

  @Prop({ type: Number, required: true })
  type: number;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);
