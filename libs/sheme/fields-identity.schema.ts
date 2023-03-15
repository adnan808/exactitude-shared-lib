import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type FieldsIdentityDocument = HydratedDocument<FieldsIdentity>;

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collection: 'fields_identities',
})
export class FieldsIdentity extends Document {
  @Prop({ type: String, required: true })
  field_reference: string;

  @Prop({ type: String, required: true })
  field_external_reference: string;

  @Prop({ type: Number, required: true })
  journey_type: number;

  @Prop({ type: String })
  index_schema: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const FieldsIdentitySchema =
  SchemaFactory.createForClass(FieldsIdentity);
