// theme : blue || grey = default || magenta || green || orange
// carouselPosition: top = default || bottom
// carouselHeight: number | 30 = default
// carousel: true | false
// type : bar || line = default

window.MOCK_DATA = {
  key: 'chart-component',
  settings: {
    theme: 'blue',
    carousel: true,
    carouselPosition: 'bottom',
    carouselHeight: 30,
  },
  data: [
    {
      id: 'e101',
      title: { text: 'Signal Strength', color: '' },
      subTitle: {
        text: '830.55 µs/cm',
        color: '',
      },
      description: { text: '55.4%', color: 'red' },
      isPrimary: true,
      type: 'bar',
      labels: [
        '01/05',
        '02/05',
        '03/05',
        '04/05',
        '05/05',
        '06/05',
        '07/05',
        '08/05',
        '09/05',
        '10/05',
      ],
      datasets: [
        {
          data: [535, 430, 635, 539, 830, 730, 735, 830, 835, 830],
        },
      ],
    },
    {
      id: 'e102',
      title: { text: 'Solar Charge', color: 'green' },
      subTitle: {
        text: '430.66 µs/cm',
        color: 'blue',
      },
      description: { text: '55.4%', color: '' },
      isPrimary: false,
      type: 'line',
      labels: [
        '01/05',
        '02/05',
        '03/05',
        '04/05',
        '05/05',
        '06/05',
        '07/05',
        '08/05',
        '09/05',
        '10/05',
      ],
      datasets: [
        {
          data: [840, 740, 745, 840, 845, 840, 545, 440, 645, 549],
        },
      ],
    },
    {
      id: 'e103',
      title: { text: 'Battery Temperature', color: '' },
      subTitle: {
        text: '600.00 µs/cm',
        color: '',
      },
      description: { text: '55.4%', color: '' },
      isPrimary: false,
      type: 'bar',
      labels: [
        '01/05',
        '02/05',
        '03/05',
        '04/05',
        '05/05',
        '06/05',
        '07/05',
        '08/05',
        '09/05',
        '10/05',
      ],
      datasets: [
        {
          data: [310, 410, 515, 401, 615, 519, 710, 715, 810, 815, 510],
        },
      ],
    },
    {
      id: 'e104',
      title: { text: 'Temperature at Device', color: '' },
      subTitle: {
        text: '960 µs/cm',
        color: '',
      },
      description: { text: '55.4%', color: '' },
      isPrimary: false,
      type: 'line',
      labels: [
        '01/05',
        '02/05',
        '03/05',
        '04/05',
        '05/05',
        '06/05',
        '07/05',
        '08/05',
        '09/05',
        '10/05',
      ],
      datasets: [
        {
          data: [750, 755, 850, 555, 450, 655, 559, 850, 855, 850],
        },
      ],
    },
    {
      id: 'e105',
      title: { text: 'Battery Capacity', color: '' },
      subTitle: {
        text: '260.88 µs/cm',
        color: '',
      },
      description: { text: '55.4%', color: '' },
      isPrimary: false,
      type: 'line',
      labels: [
        '01/05',
        '02/05',
        '03/05',
        '04/05',
        '05/05',
        '06/05',
        '07/05',
        '08/05',
        '09/05',
        '10/05',
      ],
      datasets: [
        {
          data: [760, 765, 565, 460, 665, 569, 860, 860, 865, 960],
        },
      ],
    },
  ],
}
