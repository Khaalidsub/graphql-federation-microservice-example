import { Logger, OnModuleInit } from '@nestjs/common';
import { Connection } from 'rethinkdb';
import * as rethinkdb from 'rethinkdb';
export class Rethink implements OnModuleInit {
  private readonly logger = new Logger(Rethink.name);
  constructor(private connection: Connection) {}
  async onModuleInit() {
    try {
      this.connection = await new Promise((resolve, reject) => {
        rethinkdb.connect(
          {
            host: process.env.RETHINK_HOST,
            port: Number.parseInt(process.env.RETHINK_PORT),
          },
          (err, conn) => {
            if (err) return reject(err);
            resolve(conn);
          },
        );
      });
      this.logger.log('Rethink initialized');
    } catch (error) {
      this.logger.error('Rethink Error');
      console.error(error);
    }
  }

  getConnection() {
    return this.connection;
  }
}
