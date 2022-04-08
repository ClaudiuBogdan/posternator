import { printFormats } from "components/molecules/PrintFormatPicker/data"
import { PosterData } from "../types"
import { calculateImagePartition } from "../utils"
describe("Calculate print image partition", () => {
  test("should print only one page", async () => {
    const posterData: PosterData = {
      format: printFormats["A4"],
      size: {
        width: 0.210,
        height: 0.297,
      },
      orientation: "vertical",
    }
    const posterWidth = posterData.size.width * 1000 // in millimeters
    const posterHeight = posterData.size.height * 1000 // in millimeters

    const partitions = calculateImagePartition(posterData)
    expect(partitions.length).toBe(1)
    expect(partitions[0].x).toBe(-0)
    expect(partitions[0].y).toBe(-0)
    expect(partitions[0].width).toBe(posterWidth)
    expect(partitions[0].height).toBe(posterHeight)
  })

  test("should print four pages", async () => {
    const posterData: PosterData = {
      format: printFormats["A4"],
      size: {
        width: 0.210 * 2,
        height: 0.297 * 2,
      },
      orientation: "vertical",
    }
    const posterWidth = posterData.size.width * 1000 // in millimeters
    const posterHeight = posterData.size.height * 1000 // in millimeters

    const partitions = calculateImagePartition(posterData)
    expect(partitions.length).toBe(4)
    expect(partitions[0].x).toBe(-0)
    expect(partitions[0].y).toBe(-0)
    expect(partitions[0].width).toBe(posterWidth)
    expect(partitions[0].height).toBe(posterHeight)
  })

  test("should print four pages with image less than 4 pages", async () => {
    const posterData: PosterData = {
      format: printFormats["A4"],
      size: {
        width: 0.210 * 1.5,
        height: 0.297 * 1.5,
      },
      orientation: "vertical",
    }
    const posterWidth = posterData.size.width * 1000 // in millimeters
    const posterHeight = posterData.size.height * 1000 // in millimeters

    const partitions = calculateImagePartition(posterData)
    expect(partitions.length).toBe(4)
    expect(partitions[0].x).toBe(-0)
    expect(partitions[0].y).toBe(-0)
    expect(partitions[0].width).toBe(posterWidth)
    expect(partitions[0].height).toBe(posterHeight)
  })

  test("should print second page with correct image position", async () => {

    const posterData: PosterData = {
      format: printFormats["A4"],
      size: {
        width: 0.210 * 2,
        height: 0.297 * 2,
      },
      orientation: "vertical",
    }
    const posterWidth = posterData.size.width * 1000 // in millimeters
    const posterHeight = posterData.size.height * 1000 // in millimeters

    const positionX = - posterData.format.width * 1000 // millimeters
    const partitions = calculateImagePartition(posterData)

    expect(partitions.length).toBe(4)
    expect(partitions[0].width).toBe(posterWidth)
    expect(partitions[0].height).toBe(posterHeight)

    expect(partitions[1].x).toBe(positionX)
    expect(partitions[1].y).toBe(-0)
  })

  test("should print horizontal page", async () => {
    const posterData: PosterData = {
      format: printFormats["A4"],
      size: {
        width: 0.210 * 2,
        height: 0.297 * 2,
      },
      orientation: "horizontal",
    }
    const posterWidth = posterData.size.width * 1000 // in millimeters
    const posterHeight = posterData.size.height * 1000 // in millimeters

    const positionX = - posterData.format.height * 1000 // millimeters
    const partitions = calculateImagePartition(posterData)

    expect(partitions.length).toBe(4)
    expect(partitions[0].width).toBe(posterWidth)
    expect(partitions[0].height).toBe(posterHeight)

    expect(partitions[1].x).toBe(positionX)
    expect(partitions[1].y).toBe(-0)
  })
})
