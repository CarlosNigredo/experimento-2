const settings = {
    totalReversals: 14,
    reversalsSample: 10
}

const glyphLists = [
    {
        completeSet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'],
        widthA: ['B','D','H','M','N','O','Q','U'],
        widthB: ['E','G','K','R','Z','6','8','9'],
        widthC: ['A','I','S','V','W','X','2','3','5'],
        widthD: ['C','F','J','L','P','T','Y','1','4','7'],
        slantA: ['H','M','N'],
        slantB: ['B','D','E','F','I','K','L','P','R','T','1','4'],
        slantC: ['O','Q','U','0','8'],
        slantD: ['A','V','W','X','Y'],
        slantE: ['C','G','J','S','Z','2','3','5','6','7','9'],
        width: [
            ['widthA','widthA'],//facil
            ['widthA','widthB'],//facil
            ['widthA','widthC'],//regular
            ['widthB','widthC'],//regular
            ['widthA','widthD'],//dificil
            ['widthB','widthD']//dificil
        ],
        slant: [
            ['slantA','slantB'],//facil
            ['slantA','slantD'],//regular
            ['slantA','slantE'],//dificil
            ['slantB','slantC'],//facil
            ['slantB','slantD'],//regular
            ['slantB','slantE']//dificil
        ]
    },
    {
        altoFacil: ['widthA','widthA'],
        altoDificil: ['widthA','widthD'],
        medioFacil: ['widthA','widthA'],
        medioDificil: ['widthA','widthD'],
        bajoFacil: ['widthA','widthA'],
        bajoDificil: ['widthA','widthD']
    },
    {
        altoFacil: ['slantA','slantB'],
        altoDificil: ['slantA','slantE'],
        medioFacil: ['slantA','slantB'],
        medioDificil: ['slantA','slantE'],
        bajoFacil: ['slantA','slantB'],
        bajoDificil: ['slantA','slantE']
    }
]

const dataExp = {
    peso: {
        nombre: 'peso',
        pregunta: 'peso',
        atributocss: 'wght',
        index: 0,
        string: "'wdth' 575, 'slnt' 0",
        // extremos: [76, 148]
    },
    ancho: {
        nombre: 'ancho',
        pregunta: 'ancho',
        atributocss: 'wdth',
        index: 1,
        string: "'wght' 95, 'slnt' 0",
        // extremos: [645, 930],
    },
    inclinacion: {
        nombre: 'inclinacion',
        pregunta: 'inclinación',
        atributocss: 'slnt',
        index: 2,
        string: "'wdth' 575, 'wght' 95",
        // extremos: [0, 20],
    },
}

const staircaseData = [
    // PUNTO BAJO
    {
        peso: {
            start: 40,
            standard: 70,
            step_max: 9,
            step_med: 4,
            step_min: 2
        },
        ancho: {
            start: 490,
            standard: 640,
            step_max: 51,
            step_med: 27,
            step_min: 14
        },
        inclinacion: {
            start: 1,
            standard: 6,
            step_max: 4,
            step_med: 2,
            step_min: 1
        }
    },
    // PUNTO MEDIO
    {
        peso: {
            start: 60,
            standard: 100,
            step_max: 12,
            step_med: 7,
            step_min: 3
        },
        ancho: {
            start: 630,
            standard: 780,
            step_max: 55,
            step_med: 42,
            step_min: 30
        },
        inclinacion: {
            start: 2,
            standard: 12,
            step_max: 4,
            step_med: 2,
            step_min: 1
        }
    },
    // PUNTO ALTO
    {
        peso: {
            start: 80,
            standard: 130,
            step_max: 17,
            step_med: 9,
            step_min: 4
        },
        ancho: {
            start: 740,
            standard: 880,
            step_max: 60,
            step_med: 42,
            step_min: 35
        },
        inclinacion: {
            start: 8,
            standard: 18,
            step_max: 4,
            step_med: 2,
            step_min: 1
        }
    }
]