import pino from "pino"
import { logflarePinoVercel } from "pino-logflare"
import { config } from "../config"

const initLogger = () => {
  if(config.env === "development" || config.env === "test")
    return pino({
      level: "debug",
      base: {
        env: config.env,
        revision: config.revision,
      },
    })

  // create pino-logflare console stream for serverless functions and send function for browser logs
  const { stream, send } = logflarePinoVercel({
    apiKey: config.logger.apiKey,
    sourceToken: config.logger.sourceToken,
  })

  return pino({
    browser: {
      transmit: {
        level: "info",
        send: send,
      },
    },
    level: "debug",
    base: {
      env: config.env,
      revision: config.revision,
    },
  }, stream)

}

// create pino logger
const logger = initLogger()

export const logInfo = logger.info
export const logDebug = logger.debug
export const logWarn = logger.warn
export const logError = logger.error