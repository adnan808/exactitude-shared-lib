import { Model } from 'mongoose';
import { FieldsIdentity } from '../fields-identity.schema';
import { Seeder } from 'nestjs-seeder';
import { JourneyTypesEnum } from '../../common/enums';
import { InjectModel } from "@nestjs/mongoose";

export class FieldsIdentitySeeder implements Seeder {
  constructor(
    @InjectModel(FieldsIdentity.name)
    private readonly fieldsIdentity: Model<FieldsIdentity>,
  ) {}

  async seed(): Promise<any> {
    const fieldsIdentities = [
      {
        field_reference: 'entity_urn',
        field_external_reference: 'entity_urn',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'object_urn',
        field_external_reference: 'object_urn',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'first_name',
        field_external_reference: 'first_name',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'last_name',
        field_external_reference: 'last_name',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'sub_title',
        field_external_reference: 'sub_title',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'birth_date',
        field_external_reference: 'birth_date',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'profile_picture',
        field_external_reference: 'profile_picture',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'summary',
        field_external_reference: 'summary',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'location',
        field_external_reference: 'location',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'premium',
        field_external_reference: 'premium',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'influencer',
        field_external_reference: 'influencer',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'influencer',
        field_external_reference: 'influencer',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'treasury_media',
        field_external_reference: 'treasury_media',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'languages.primary_locale',
        field_external_reference: 'languages.primary_locale',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'languages.supported_locals',
        field_external_reference: 'languages.supported_locals',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'industry',
        field_external_reference: 'industry',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'education.date.start',
        field_external_reference: 'education.date.start',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'education.date.end',
        field_external_reference: 'education.date.end',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'education.date.field_of_study',
        field_external_reference: 'education.date.field_of_study',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
      {
        field_reference: 'skills',
        field_external_reference: 'skills',
        journey_type: JourneyTypesEnum.DEFAULT,
        index_schema: null,
      },
    ];

    return this.fieldsIdentity.insertMany(fieldsIdentities);
  }

  async drop(): Promise<any> {
    return this.fieldsIdentity.deleteMany({});
  }
}
