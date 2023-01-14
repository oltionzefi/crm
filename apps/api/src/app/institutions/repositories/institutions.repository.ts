import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Institution } from '../models';

@Injectable()
export class InstitutionsRepository {
  constructor(
    @InjectModel(Institution.name)
    private institutionModel: Model<Institution>,
  ) {}

  async findAll(): Promise<Institution[]> {
    return this.institutionModel.find();
  }

  async findInstitutionByUrl(institutionUrl: string): Promise<Institution> {
    return this.institutionModel.findOne({ url: institutionUrl });
  }

  // This should return a promise
  updateInstitution(institutionId: string, changes: Partial<Institution>) {
    return this.institutionModel.findOneAndUpdate({ _id: institutionId }, changes, {
      new: true,
    });
  }

  deleteInstitution(institutionId: string) {
    return this.institutionModel.deleteOne({ _id: institutionId });
  }

  async addInstitution(institution: Partial<Institution>): Promise<Institution> {
    const newEntity = new this.institutionModel(institution);

    await newEntity.save();

    return newEntity;
  }
}
