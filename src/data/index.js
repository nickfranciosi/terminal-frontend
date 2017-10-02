export default {
  investors: [
    {name: "NEA1", icon: require('../assets/images/investors/01-Founders fund.png')},
    {name: "NEA2", icon: require('../assets/images/investors/02-Kholsa ventures.png')},
    {name: "NEA3", icon: require('../assets/images/investors/03-SVAngel.png'),size: "42%", maxSize: "113px"},
    {name: "NEA4", icon: require('../assets/images/investors/04-8VC.png'), size: "33%", maxSize: "83px"},
    {name: "NEA5", icon: require('../assets/images/investors/05-Lightspeed Venture.png')},
    {name: "NEA6", icon: require('../assets/images/investors/06-Bain Capital.png')},
    {name: "NEA7", icon: require('../assets/images/investors/07-NEA.png'), size: "42%", maxSize: "115px"},
    {name: "NEA8", icon: require('../assets/images/investors/08-Cherubic.png'), size: "42%", maxSize: "128px"},
  ],
  team: [
    {
      name: "Jack Abraham",
      bio: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/team/Jack.jpg'),
    },
    {
      name: "Joe Abraham",
      bio: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/team/Joe.jpg'),
    },
    {
      name: "Dylan Abraham",
      bio: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/team/Dylan.jpg'),
    },
    {
      name: "Luke Abraham",
      bio: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/team/Luke.jpg'),
    },
  ],

  locations: [
    {
      parentPlace: "Ontario",
      city: "Waterloo",
      imgSrc: "http://lorempixel.com/360/720/city/1",
    },
    {
      parentPlace: "Quebec",
      city: "Montreal",
      imgSrc: "http://lorempixel.com/360/720/city/2",
    },
    {
      parentPlace: "B.C.",
      city: "Vancouver",
      imgSrc: "http://lorempixel.com/360/720/city/3",
    },
    {
      parentPlace: "Brazil",
      city: "Sao Paulo",
      imgSrc: "http://lorempixel.com/360/720/city/4",
      comingSoon: true,
    },
  ],
  imageBar: [
    require('../assets/images/culture/1.jpg'),
    require('../assets/images/culture/2.jpg'),
    require('../assets/images/culture/3.jpg'),
    require('../assets/images/culture/4.jpg'),
    require('../assets/images/culture/5.jpg'),
  ]
}