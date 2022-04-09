import { calculateSizeFromHeight, calculateSizeFromWidth } from "../utils"

describe("Calculate new height based on width, maxSize and aspectRation", () => {
  test("should calculate height based on width", async () => {
    const aspectRation = 2
    const maxSize = 1000
    const width = 100

    const size = calculateSizeFromWidth({width, aspectRation, maxSize})

    expect(size.width).toBe(width)
    expect(size.height).toBe(width/aspectRation)
  })

  test("should calculate max height based on width", async () => {
    const aspectRation = 0.5
    const maxSize = 100
    const width = 150

    const size = calculateSizeFromWidth({width, aspectRation, maxSize})

    expect(size.width).toBe(maxSize * aspectRation)
    expect(size.height).toBe(maxSize)
  })

  test("should calculate height based on  max width", async () => {
    const aspectRation = 2
    const maxSize = 100
    const width = 150

    const size = calculateSizeFromWidth({width, aspectRation, maxSize})

    expect(size.width).toBe(maxSize)
    expect(size.height).toBe(maxSize/aspectRation)
  })
})

describe("Calculate new width based on height, maxSize and aspectRation", () => {
  test("should calculate width based on height", async () => {
    const aspectRation = 2
    const maxSize = 1000
    const height = 100

    const size = calculateSizeFromHeight({height, aspectRation, maxSize})

    expect(size.width).toBe(height * aspectRation)
    expect(size.height).toBe(height)
  })

  test("should calculate width based on max hight", async () => {
    const aspectRation = 0.5
    const maxSize = 100
    const height = 150

    const size = calculateSizeFromHeight({height, aspectRation, maxSize})

    expect(size.width).toBe(maxSize * aspectRation)
    expect(size.height).toBe(maxSize)
  })

  test("should calculate max width based on height", async () => {
    const aspectRation = 2
    const maxSize = 100
    const height = 150

    const size = calculateSizeFromHeight({height, aspectRation, maxSize})

    expect(size.width).toBe(maxSize)
    expect(size.height).toBe(maxSize/aspectRation)
  })
})
