import { CommandHandler } from 'discommand'
import { Client } from 'discord.js'
import path = require('path')

export class Debugger {
  client: Client
  owners: string[]
  constructor(client: Client, owners: string[]) {
    this.client = client
    this.owners = owners
    if (!owners) throw Error('owners is undefined.')
  }

  public start() {
    const cmd: CommandHandler = new CommandHandler(this.client, {
      path: path.join(__dirname, 'Commands'),
      loadType: 'FILE',
    })

    cmd.CommandLoadAll()
  }
}
