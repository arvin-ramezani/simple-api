import { Controller, Post, Body } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { HandleEmailDto } from './dtos/emails.dto';

@Controller('api/emails')
export class EmailsController {
  constructor(private readonly emailService: EmailsService) {}

  @Post()
  async handleEmails(@Body() user: HandleEmailDto) {
    return this.emailService.handleEmail(user);
  }
}
