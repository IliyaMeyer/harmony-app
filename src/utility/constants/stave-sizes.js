
const STAVE_SIZES = () => {

  const lineThickness = 2
  const spaceThickness = 12
  const staveWidth = 1500

  const spacesInBlankSpace = 6

  const mainInputSpaceHeight = 5 * lineThickness + 4 * spaceThickness
  const blankSpaceThickness = spacesInBlankSpace * (lineThickness + spaceThickness) - lineThickness
  const staveHeight = 10 * lineThickness + 8 * spaceThickness + blankSpaceThickness
  const userWorkArea = 2 * mainInputSpaceHeight + blankSpaceThickness + 5 * lineThickness + 5 * spaceThickness;

  return {
    LINE_THICKNESS: lineThickness,
    SPACE_THICKNESS: spaceThickness,
    BLANK_SPACE_THICKNESS: blankSpaceThickness,
    STAVE_HEIGHT: staveHeight,
    STAVE_WIDTH: staveWidth,
    MAIN_INPUT_SPACE_HEIGHT: mainInputSpaceHeight,
    USER_WORK_AREA: userWorkArea
  }

}

export default STAVE_SIZES()
