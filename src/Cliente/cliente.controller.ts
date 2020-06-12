import { Controller, Body, Post, Get } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { plainToClass } from "class-transformer";
import { ClienteDto } from './cliente.dto';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {

    constructor(private readonly service: ClienteService) {
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    save(@Body() clienteDto: ClienteDto) {
        const cliente = plainToClass(Cliente, clienteDto);
        return this.service.save(cliente);
    }

}
