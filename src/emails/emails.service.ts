import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { HandleEmailDto } from './dtos/emails.dto';
import axios from 'axios';

@Injectable()
export class EmailsService {
  constructor(private readonly configService: ConfigService) {}

  async handleEmail(user: HandleEmailDto) {
    try {
      const { email, password } = user;
      const destUrl = this.configService.get<string>('DESTINATION_URL');

      if (!destUrl) return 'Destination URL not specified!';

      const destRes = await axios.post(`${destUrl}/`, { email, password });

      return { ...destRes.data };
    } catch (error) {
      return { ...new InternalServerErrorException(), ...{ error } };
    }
  }
}
