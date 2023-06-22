import { HydratedDocument, Schema } from 'mongoose';
import { IdentitiesReferenceEnum } from '../common/enum';

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'fields_identities',
};

export class FieldsIdentity {
  _id: string;
  field_reference: IdentitiesReferenceEnum;
  field_external_reference: string;
  journey_type: number;
  index_schema: string;
  created_at: Date;
  updated_at: Date;
}
export const FieldIdentitySchema = new Schema<FieldsIdentity>(
  {
    field_reference: { type: String, unique: true },
    field_external_reference: { type: String, unique: true },
    journey_type: Number,
    index_schema: String,
    created_at: Date,
    updated_at: Date,
  },
  options,
);

export type FieldsIdentityDocument = HydratedDocument<FieldsIdentity>;
