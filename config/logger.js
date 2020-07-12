const winston = require('winston');
const winstondb = require('winston-mongodb');
const dotenv = require('dotenv');

dotenv.config();
const { DB_CONNECTION } = process.env;
const { combine, timestamp, label, printf } = winston.format;
const { createLogger, transports, format } = winston;

const myFormat = format.printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.MongoDB({
      level: 'info',
      db: DB_CONNECTION,
      collection: 'logs',
      capped: true,
      cappedMax: 40,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
  ],
  format: format.combine(
    label({ label: 'transaction-api' }),
    format.timestamp(),
    myFormat
  ),
});

module.exports = { logger };
