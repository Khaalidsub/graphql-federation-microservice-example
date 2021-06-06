import { IChatService } from '@apps/common';
import { Inject, Injectable } from '@nestjs/common';
import {Db} from 'rethinkdb'
import { Rethink } from './rethink';
@Injectable()
export class ChatService implements IChatService {
  constructor(@Inject('CHAT_DB') private chat_client:Db, @Inject('RETHINK_CLIENT')private rethink_client:Rethink ){}
  create(data: any) {
    return this.chat_client.table('chats').insert(data).run(this.rethink_client.getConnection())
  }
  findOne(query: any) {
    return this.chat_client.table('chats').filter(query).run(this.rethink_client.getConnection())
  }
  findById(id: string) {
    return this.chat_client.table('chats').get(id).run(this.rethink_client.getConnection())
  }
  findAll() {
    return this.chat_client.table('chats').getAll().run(this.rethink_client.getConnection())
  }
  findAllByQuery(query: any) {
    return this.chat_client.table('chats').filter(query).run(this.rethink_client.getConnection())
  }
  updateById(id: string, query: any) {
    return this.chat_client.table('chats').get(id).update(query).run(this.rethink_client.getConnection())
  }
  deleteById(id: string) {
    return this.chat_client.table('chats').get(id).delete().run(this.rethink_client.getConnection())
  }
 

}
