
const IMAGE_PATHS = () => {

  return {
    CLEFS: {
      TREBLE_CLEF: '/assets/clefs/clef-treble.png',
      BASS_CLEF: '/assets/clefs/clef-bass.png'
    },
    TIME_SIGNATURES: [
      '',
      '/assets/time-signatures/time-signature-2_2.PNG',
      '/assets/time-signatures/time-signature-2_4.PNG',
      '/assets/time-signatures/time-signature-3_4.PNG',
      '/assets/time-signatures/time-signature-3_8.PNG',
      '/assets/time-signatures/time-signature-4_4.PNG',
      '/assets/time-signatures/time-signature-6_8.PNG',
      '/assets/time-signatures/time-signature-9_8.PNG',
      '/assets/time-signatures/time-signature-12_8.PNG',
    ],
    ACCIDENTALS: {
      DOUBLE_FLAT: '/assets/accidentals/double-flat.png',
      DOUBLE_SHARP: '/assets/accidentals/double-sharp.png',
      FLAT: '/assets/accidentals/flat.png',
      NATURAL: '/assets/accidentals/natural.png',
      SHARP: '/assets/accidentals/sharp.png'
    },
    CONTENT_PIECES: {
      QUAVER_UPRIGHT_SINGLE: 'assets/content-pieces/quaver-upright-single.png',
      QUAVER_DOWN_SINGLE: 'assets/content-pieces/quaver-down-single.png',
      CROTCHET_UP: 'assets/content-pieces/crotchet-up.png',
      CROTCHET_DOWN: 'assets/content-pieces/crotchet-down.png',
      MINIM_UP: 'assets/content-pieces/minim-up.png',
      MINIM_DOWN: 'assets/content-pieces/minim-down.png',
      SEMIBREVE: '/assets/content-pieces/semibreve.png',
      FILLED_STEMLESS: '/assets/content-pieces/filled-stemless.png',
      MINIM_STEMLESS: '/assets/content-pieces/minim-stemless.png',
    }

  }

}

export default IMAGE_PATHS()
