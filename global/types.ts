export type Theme = {
    colors: {
        primary: string
    }
}

export type AppConfig = {
    env: string,
    revision: string,
    logger: {
      level: string,
      apiKey: string,
      sourceToken: string,
    },
}