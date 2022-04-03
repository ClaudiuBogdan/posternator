import {act, fireEvent, render, waitFor} from "@testing-library/react"
import { FileUploadInput } from "../index"

// Reference: https://www.npmjs.com/package/react-dropzone
describe("File upload field", () => {
  test("invoke onDragEnter when dragenter event occurs", async () => {
    const file = new File([
      JSON.stringify({ping: true}),
    ], "ping.json", { type: "application/json" })
    const data = mockData([file])
    const onDragEnter = jest.fn()

    const ui = (<FileUploadInput onDragEnter={onDragEnter} />)
    const { container, rerender } = render(ui)
    const dropzone = container.querySelector("div")

    dispatchEvt(dropzone!, "dragenter", data)
    await flushPromises(rerender, ui)

    expect(onDragEnter).toHaveBeenCalled()
  })
})

async function flushPromises(rerender: Function, ui: JSX.Element) {
  await act(() => waitFor(() => rerender(ui)))
}

function dispatchEvt(node: Document | Element | Window | Node, type: string, data: any) {
  const event = new Event(type, { bubbles: true })
  Object.assign(event, data)
  fireEvent(node, event)
}

function mockData(files: File[]) {
  return {
    dataTransfer: {
      files,
      items: files.map(file => ({
        kind: "file",
        type: file.type,
        getAsFile: () => file,
      })),
      types: ["Files"],
    },
  }
}