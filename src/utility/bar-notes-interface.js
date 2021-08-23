const barNotes = (barData) => {
  return barData.map((stave) => {
    return stave.map((bar) => {
      return {
        // TODO make this better this is awful
        Soprano: bar[0].map((contentPiece) => {
          return {
            value: contentPiece[0],
            length: contentPiece[1],
            type: contentPiece[2]
          }
        }),
        Alto: bar[1].map((contentPiece) => {
          return {
            value: contentPiece[0],
            length: contentPiece[1],
            type: contentPiece[2]
          }
        }),
        Tenor: bar[2].map((contentPiece) => {
          return {
            value: contentPiece[0],
            length: contentPiece[1],
            type: contentPiece[2]
          }
        }),
        Bass: bar[3].map((contentPiece) => {
          return {
            value: contentPiece[0],
            length: contentPiece[1],
            type: contentPiece[2]
          }
        })
      }
    })
  })
}

export { barNotes }
