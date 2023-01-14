import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Put,
  BadRequestException,
  Delete,
} from '@nestjs/common';

import { AuthGuard } from '../guards';
import { InstitutionsRepository } from './repositories';
import { Institution } from './models';

@Controller('institutions')
@UseGuards(AuthGuard)
export class InstitutionsController {
  constructor(private institutionsRepository: InstitutionsRepository) {}

  @Post()
  @UseGuards(AuthGuard)
  async createInstitution(@Body() institution: Institution): Promise<Institution> {
    return this.institutionsRepository.addInstitution(institution);
  }

  @Get()
  async findAllInstitutions(): Promise<Institution[]> {
    return this.institutionsRepository.findAll();
  }

  @Get(':institutionUrl')
  async findInstitutionByUrl(@Param('institutionUrl') institutionUrl: string) {
    const institution = await this.institutionsRepository.findInstitutionByUrl(institutionUrl);

    if (!institution) {
      throw new NotFoundException('Could not find institution for url' + institutionUrl);
    }
  }

  @Put(':institutionId')
  @UseGuards(AuthGuard)
  async updateInstitution(
    @Param('institutionId') institutionId: string,
    @Body() changes: Institution,
  ): Promise<Institution> {
    if (changes._id) {
      throw new BadRequestException('Can not update entity id');
    }

    return this.institutionsRepository.updateInstitution(institutionId, changes);
  }

  @Delete()
  @UseGuards(AuthGuard)
  async deleteEntity(@Body() institutions: Institution[]) {
    return this.institutionsRepository.deleteBulk(institutions);
  }
}
