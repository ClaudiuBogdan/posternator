const loadEnv = (key) => process.env[key]

const loadRequiredEnv = (key) => {
  const value = loadEnv(key)
  if (!value) {
    throw new Error(`Missing required env ${key}`)
  }
  return value
}

const loadConfigs = () => {
  const configs = {
    env: loadRequiredEnv("NEXT_PUBLIC_NODE_ENV"),
    revision: loadRequiredEnv("NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA"),
    logger: {
      level: loadRequiredEnv("NEXT_PUBLIC_LOGGER_LEVEL"),
      apiKey: loadRequiredEnv("NEXT_PUBLIC_LOGGER_API_KEY"),
      sourceToken: loadRequiredEnv("NEXT_PUBLIC_LOGGER_SOURCE_TOKEN"),
    },
  }

  return configs
}

module.exports = loadConfigs