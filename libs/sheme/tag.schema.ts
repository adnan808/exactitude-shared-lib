import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, HydratedDocument, Document } from 'mongoose';
import { Profile } from './profile.schema';
import { User } from './user.schema';

export type TagDocument = HydratedDocument<Tag>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Tag extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Profile' }] })
  profiles: Profile[];

  @Prop({ type: String })
  name: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
