import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService {

    clientes: Array<Cliente> = [];
    

    constructor () {

        const cliente = new Cliente();

        cliente.nome = 'Rodrigo';
        cliente.sobrenome = 'Santos';
        cliente.idade = '27';
        cliente.genero = 'Masculino'
        cliente.cpf = '12345678910';
        cliente.rg = '12345678';
        cliente.telefone = '999707070';
        cliente.email = 'rodrigo.santos@edu.unipar.br';
        cliente.endereco = 'Rua Coisarada, bairro Fim de mundo';
        cliente.estadoCivil = 'Solteiro';

        this.clientes.push(cliente);

    }

    findAll(){
        return this.clientes;
    }

    save(cliente: Cliente) {
        this.clientes.push(cliente);
    }
    

}
