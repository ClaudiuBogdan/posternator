export type Theme = {
    colors: {
        primary: string
    }
}

export type AppConfig = {
    env: string,
    revision: string,
    logger: {
      apiKey: string,
      sourceToken: string,
    },
}