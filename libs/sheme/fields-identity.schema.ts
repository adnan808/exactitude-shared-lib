import { HydratedDocument, Schema } from 'mongoose';

export const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'fields_identities'
};

export class FieldsIdentity {
  _id: string;
  field_reference: string;
  field_external_reference: string;
  journey_type: number;
  index_schema: string;
  created_at: Date;
  updated_at: Date;
}
export const fieldIdentitySchema = new Schema<FieldsIdentity>(
    {
      field_reference: String,
      field_external_reference: String,
      journey_type: Number,
      index_schema: String,
      created_at: Date,
      updated_at: Date,
    },
    options,
);

export type FieldsIdentityDocument = HydratedDocument<FieldsIdentity>;

