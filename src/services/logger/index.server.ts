import chalk from 'chalk';

/**
 * @description
 * An enum of valid logging levels.
 */
export enum LogLevel {
  Error = 0,
  Warn = 1,
  Default = 2,
  Debug = 3,
}

/**
 * @description Server-Side Logger
 * @internal
 *
 * @see [Inspiration](https://github.com/vendure-ecommerce/vendure)
 */
export class Logger {
  private level: LogLevel = LogLevel.Default;
  private readonly timestamp: boolean;

  constructor(options?: { level?: LogLevel; timestamp?: boolean }) {
    this.level = options?.level ?? LogLevel.Default;
    this.timestamp = options?.timestamp ?? true;
  }

  error(message: string, trace?: object | string | undefined) {
    if (this.level <= LogLevel.Error) return;

    const output = trace ? `${message}: ${JSON.stringify(trace)}` : message;

    this.printError(chalk.yellow(`ERROR`), output);
  }

  /** @description prints warnings to the standard output */
  warn(message: string) {
    if (this.level <= LogLevel.Warn) return;
    this.print(chalk.yellow(`WARNING`), message);
  }

  /** @description prints infos to the standard output */
  info(message: string) {
    if (this.level <= LogLevel.Default) return;
    this.print(chalk.blueBright(`INFO`), message);
  }

  /** @description prints debug information to the standard output */
  debug(message: string) {
    if (this.level <= LogLevel.Debug) return;
    this.print(chalk.magenta(`DEBUG`), message);
  }

  /** @internal */
  private print(prefix: string, message: string) {
    // retrieves current time
    const timestamp = new Date(Date.now()).toLocaleString(undefined);
    process.stdout.write(`[${prefix}] ${timestamp} - ${chalk.cyan(message)} \n`);
  }

  /** @internal */
  private printError(prefix: string, message: string) {
    // retrieves current time
    const timestamp = new Date(Date.now()).toLocaleString(undefined);
    process.stderr.write(`[${prefix}] ${timestamp} - ${chalk.cyan(message)} \n`);
  }
}

export default new Logger({
  level: process.env.NODE_ENV === 'production' ? LogLevel.Default : LogLevel.Debug,
});
