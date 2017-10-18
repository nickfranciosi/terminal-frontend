export default {
  investors: [
    {name: "NEA4", icon: require('../assets/images/investors/04-8VC.png'), size: "33%", maxSize: "83px"},
    {name: "NEA9", icon: require('../assets/images/investors/forerunner.png')},
    {name: "NEA1", icon: require('../assets/images/investors/01-Founders fund.png')},
    {name: "NEA2", icon: require('../assets/images/investors/02-Kholsa ventures.png')},
    {name: "NEA10", icon: require('../assets/images/investors/05-Lightspeed Venture.png')},
    {name: "NEA7", icon: require('../assets/images/investors/07-NEA.png'), size: "42%", maxSize: "115px"},
    {name: "NEA11", icon: require('../assets/images/investors/sequoia.svg')},
    {name: "NEA12", icon: require('../assets/images/investors/thrive_capital.png')},
  ],

  locations: [
    {
      parentPlace: "Ontario",
      city: "Waterloo",
      imgSrc: require('../assets/images/locations/waterloo.jpg'),
    },
    {
      parentPlace: "Quebec",
      city: "Montreal",
      imgSrc: require('../assets/images/locations/montreal.jpg'),
    },
    {
      parentPlace: "B.C.",
      city: "Vancouver",
      imgSrc: require('../assets/images/locations/vancouver.jpg'),
    },
    {
      parentPlace: "Brazil",
      city: "Sao Paulo",
      imgSrc: require('../assets/images/locations/sao_paulo.jpg'),
      comingSoon: true,
    },
  ],
  imageBar: [
    require('../assets/images/culture/1.jpg'),
    require('../assets/images/culture/2.jpg'),
    require('../assets/images/culture/3.jpg'),
    require('../assets/images/culture/4.jpg'),
    require('../assets/images/culture/5.jpg'),
  ], 

}