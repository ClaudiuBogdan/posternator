export type Position = {
    x: number
    y: number
}

export type Line = {
    position: Position
    length: number
    orientation: "vertical" | "horizontal"
}

export type LineProps = Line & {
    id?: string
}

export type LineStyledProps = {
    $length: number
    $position: Position
    $orientation: "vertical" | "horizontal"
}
