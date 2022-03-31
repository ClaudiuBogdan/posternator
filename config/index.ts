import getConfig from "next/config"
import loadConfigs from "./loader"
import { AppConfig } from "../global/types"

export const config: AppConfig = getConfig()?.publicRuntimeConfig ?? loadConfigs()