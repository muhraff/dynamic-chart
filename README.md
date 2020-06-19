# Dynamic data chart.js example

Mock data example

`./api/mockdata.json.js`

```js
{
  key: 'chart-component', // optional
  settings: {
    theme: 'blue', // grey(default), blue, magenta, green, orange,
    carousel: true, // boolean
    carouselPosition: 'bottom', // top(default) | bottom
    carouselHeight: 30, // number , 30(default)
  },
  data: [
    {
      id: 'e101', // Chart Data ID
      title: {
                text: 'TITLE_TEXT', // string
                color: 'COLOR_CODE' // string
            },
      subTitle: {
                text: 'SUB_SITLE_TEXT', // string
                color: 'COLOR_CODE', // string
            },
      description: {
                text: 'DESCRIPTION_TEXT', // string
                color: 'COLOR_CODE' // string
            },
      isPrimary: true, // true | false
      type: 'bar', // bar | line(default)
      labels: [ ... ],
      datasets: [
        {
          data: [ ... ],
        },
      ],
    },

    ...

    ]
}
```
