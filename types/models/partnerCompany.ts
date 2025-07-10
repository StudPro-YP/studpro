import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IPartnerCompany extends Document {
  eventId: string;
  name: string;
  logo: string;
  website: string;
  contactEmail: string;
  description: string;
  domains: string[];
  partneredSince: Date;
  partnershipLevel: string; // supports both predefined and custom values
  notes?: string;
  isActive: boolean;
}

const PartnerCompanySchema: Schema = new Schema({
  eventId: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  domains: {
    type: [String],
    required: true,
    default: [],
  },
  partneredSince: {
    type: Date,
    required: true,
  },
  partnershipLevel: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
});

export const PartnerCompany = mongoose.models.PartnerCompany || mongoose.model<IPartnerCompany>('PartnerCompany', PartnerCompanySchema);