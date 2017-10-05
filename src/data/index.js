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
  amenities: [
    {
      headline: "Catered meals",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/icons/join-the-team/grill.svg'),
    },
    {
      headline: "Flexible schedule",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/icons/join-the-team/hourglass.svg'),
    },
    {
      headline: "Retirement savings",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/icons/join-the-team/Leaf.svg'),
    },
    {
      headline: "World-class talent",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/icons/join-the-team/medal.svg'),
    },
    {
      headline: "Onsite massages",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/icons/join-the-team/bed.svg'),
    },
    {
      headline: "Career enhancement",
      description: "Nullam quis risus eget urna mollis ornare vel eu leo set  um tresario.",
      image: require('../assets/images/icons/join-the-team/protractor.svg'),
    },
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

  jobs: [
    {
      title: "Full-stack engineer",
      place: "Vancouver, B.C.",
      company: "Zero"
    },
    {
      title: "Swift engineer",
      place: "Chicago, USA",
      company: "Zero"
    }, 
    {
      title: "Operations",
      place: "Vancouver, B.C.",
      company: "RosmettaMD"
    }, 
    {
      title: "Full-stack engineer",
      place: "Montreal, Quebec",
      company: "Terminal"
    }, 
    {
      title: "Full-stack engineer",
      place: "Vancouver, B.C.",
      company: "Zero"
    }, 
  ]
}