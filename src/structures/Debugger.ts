import { CommandHandler } from 'discommand'
import { Client } from 'discord.js'
import path = require('path')
import { DebuggerOptions } from './types/DebuggerOptions'

export class Debugger {
  client: Client
  options: DebuggerOptions
  constructor(client: Client, options: DebuggerOptions) {
    this.client = client
    this.options = options
    if (!options.ownerID) throw Error('owners is undefined.')
  }

  public start() {
    const cmd: CommandHandler = new CommandHandler(this.client, {
      path: path.join(__dirname, 'Commands'),
      loadType: 'FILE',
    })

    cmd.CommandLoadAll()
  }
}
