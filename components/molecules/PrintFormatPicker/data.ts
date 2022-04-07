import { PrintFormat } from "./types"

export const printFormats: {[key: string]: PrintFormat} = {
  "A1": {
    id: "A1",
    name: "A1",
    width: 0.594,
    height: 0.841,
  },
  "A2": {
    id: "A2",
    name: "A2",
    width: 0.420,
    height: 0.594,
  },
  "A3": {
    id: "A3",
    name: "A3",
    width: 0.297,
    height: 0.420,
  },
  "A4": {
    id: "A4",
    name: "A4",
    width: 0.210,
    height: 0.297,
  },
  "A5": {
    id: "A5",
    name: "A5",
    width: 0.148,
    height: 0.210,
  },
}