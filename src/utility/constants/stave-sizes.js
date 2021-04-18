
const STAVE_SIZES = () => {

  const lineThickness = 2
  const spaceThickness = 12
  const spacesInBlankSpace = 6
  const blankSpaceThickness = spacesInBlankSpace * (lineThickness + spaceThickness) - lineThickness
  const staveHeight = 10 * (lineThickness + spaceThickness) + blankSpaceThickness
  const staveWidth = 1000

  return {
    LINE_THICKNESS: lineThickness,
    SPACE_THICKNESS: spaceThickness,
    BLANK_SPACE_THICKNESS: blankSpaceThickness,
    STAVE_HEIGHT: staveHeight,
    STAVE_WIDTH: staveWidth
  }

}

export default STAVE_SIZES()
