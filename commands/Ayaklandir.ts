import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class Ayaklandir extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'ayaklandir'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command
     */
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process
     */
    stayAlive: false,
  }

  public async run() {
    const util = require('util');
    const exec = util.promisify(require('child_process').exec);

    await exec(`node ace migration:rollback`);
    this.logger.info('Rollbacks OK')
    await exec(`node ace migration:run`);
    this.logger.info('Migration OK')
    await exec(`node ace db:seed`);
    this.logger.info('Seed OK')
  }
}
