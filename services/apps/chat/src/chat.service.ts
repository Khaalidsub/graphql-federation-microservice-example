import { IChatService } from '@apps/common';
import { Inject, Injectable } from '@nestjs/common';
import { Db, Sequence } from 'rethinkdb';
import { Rethink } from './rethink';
@Injectable()
export class ChatService implements IChatService {
  constructor(
    @Inject('CHAT_DB') private chat_client: Db,
    @Inject('RETHINK_CLIENT') private rethink_client: Rethink,
  ) {}
  async create(data: any) {
    const response = await this.chat_client
      .table('chats')
      .insert(data)
      .run(this.rethink_client.getConnection());
    return this.findById(response.generated_keys[0]);
  }
  findOne(query: any) {
    return this.chat_client
      .table('chats')
      .filter(query)
      .run(this.rethink_client.getConnection());
  }
  findById(id: string) {
    return this.chat_client
      .table('chats')
      .get(id)
      .run(this.rethink_client.getConnection());
  }
  findAll() {
    return this.chat_client
      .table('chats')
      .getAll()
      .run(this.rethink_client.getConnection());
  }
  findAllByQuery(query: any) {
    return this.chat_client
      .table('chats')
      .filter(query)
      .run(this.rethink_client.getConnection());
  }
  updateById(id: string, query: any) {
    return this.chat_client
      .table('chats')
      .get(id)
      .update(query)
      .run(this.rethink_client.getConnection());
  }
  deleteById(id: string) {
    return this.chat_client
      .table('chats')
      .get(id)
      .delete()
      .run(this.rethink_client.getConnection());
  }

  // async promisify(query:Sequence){
  //   try {
  //     const result = await   new Promise((resolve, reject)=>{
  //       query.run(this.rethink_client.getConnection(),(err,cursor)=>{
  //             if (err) return reject(err)
  //             resolve(cursor)
  //         })
  //     })
  //     this.logger.log('Rethink initialized')
  // } catch (error) {
  //     this.logger.error('Rethink Error')
  //     console.error(error)
  // }
  // }
}
