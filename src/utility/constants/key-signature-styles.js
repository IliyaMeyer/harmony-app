import STAVE_SIZES from './stave-sizes'

const KEY_SIG_STYLES = () => {

  const {LINE_THICKNESS, SPACE_THICKNESS} = STAVE_SIZES

  return {
    SHARP: [
      {
        height: SPACE_THICKNESS * 3,
        marginTop: -SPACE_THICKNESS * 3/2
      },
      {
        height: SPACE_THICKNESS * 3,
        marginTop: LINE_THICKNESS * 2
      },
      {
        height: SPACE_THICKNESS * 3,
        marginTop: -SPACE_THICKNESS * 2
      },
      {
        height: SPACE_THICKNESS * 3,
        marginTop: -LINE_THICKNESS * 2
      },
      {
        height: SPACE_THICKNESS * 3,
        marginTop: SPACE_THICKNESS + LINE_THICKNESS * 3
      },
      {
        height: SPACE_THICKNESS * 3,
        marginTop: -SPACE_THICKNESS + LINE_THICKNESS
      },
      {
        height: SPACE_THICKNESS * 3,
        marginTop: SPACE_THICKNESS - LINE_THICKNESS
      }
    ],
    FLAT: [
      {
        height: SPACE_THICKNESS * 2.35,
        marginTop: LINE_THICKNESS * 5
      },
      {
        height: SPACE_THICKNESS * 2.35,
        marginTop: -SPACE_THICKNESS
      },
      {
        height: SPACE_THICKNESS * 2.35,
        marginTop: SPACE_THICKNESS + LINE_THICKNESS * 2
      },
      {
        height: SPACE_THICKNESS * 2.35,
        marginTop: -LINE_THICKNESS * 2
      },
      {
        height: SPACE_THICKNESS * 2.35,
        marginTop: SPACE_THICKNESS * 2
      },
      {
        height: SPACE_THICKNESS * 2.35,
        marginTop: LINE_THICKNESS
      },
      {
        height: SPACE_THICKNESS * 2.35,
        marginTop: SPACE_THICKNESS * 2 + LINE_THICKNESS * 3
      }
    ]
  }

}

export default KEY_SIG_STYLES()
