$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

var ngDemo = angular.module('ngDemo', ['ngRoute']);

ngDemo.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'homeController'
			  })
        .when('/summer', 
              {
              templateUrl : 'pages/summer.html',
              controller  : 'summerController'
			  })
            .when('/winter', 
              {
              templateUrl : 'pages/winter.html',
              controller  : 'winterController'
              })
        .when('/products', 
              {
              templateUrl : 'pages/products.html',
              controller  : 'productsController'
			  });
	});

ngDemo.controller('homeController', function($scope) 
    {
    $scope.images=
        [
        {
          name: "Cooper",
          bio: "Glove Enthusiast",
          image: "images/Cooper.jpg"
        },
        {
          name: "Harrison",
          bio: "Cross Dresser",
          image: "images/Harrison.jpg"
        },
        {
          name: "Paul",
          bio: "Hi I'm Paul",
          image: "images/paul.jpg"
        },
        {
          name: "Robbie",
          bio: "Duck Rider",
          image: "images/Robbie.jpg"
        },
        {
          name: "Ryan",
          bio: "I like to watch dirt bike",
          image: "images/Ryan.jpg"
        },
        {
          name: "Sarah",
          bio: "From South Africa",
          image: "images/sarah.jpg"
        },
        {
          name: "Sawyer",
          bio: "Snake Charmer",
          image: "images/Sawyer.jpg"
        }
        ];
	});

ngDemo.controller('summerController', function($scope) 
    {
    $scope.summer=
        [
   /*     {
        image: "images/tent1.jpg",
        cost: "$350",
        name: "Big Agnes Fly Creek UL 2 Tent",
        description: "An ultralight, 3-season tent for 2 that weighs in at 1 lb. 15 oz., this tent grants protection from bugs and rain at a weight one person can easily carry alone."
        },*/
        {
        image:"images/greysandtorreys.jpg",
        cost:"$100",
        name:"Greys and Torreys overnight camping trip",
        description:"Hike the approach in the late afternoon, camping at the base of Greys peak before pushing to the summit of Greys and Torreys in the early morning."
        },
        {
        image:"images/coloradotrail.jpg",
        cost:"$130",
        name:"Section(s) Hike Colorado Trail",
        description:"Hike the Colorado Trail in sections, with price varying based on number of sections and which sections are chosen."
        },
        /*{
        image:"images/rope1.jpg",
        cost:"$260",
        name:"Mammut Infinity 9.5mm x 70m Dry Rope",
        description:"Ideal for both trad and sport climbing when light weight is important, yet durability is still a priority, the Infinity 70m rope features a dry-treated core and sheath for your mountain adventures."
        },
        {
        image:"images/watch1.jpg",
        cost:"$330",
        name:"Garmin Forerunner 235 GPS Heart Rate Monitor Watch",
        description:"Stay on pace for your next personal record with Forerunner® 235, the wrist-based heart rate GPS and GLONASS running watch with smart features like audio prompts and text/call notifications."
        },
        {
        image:"images/harness1.jpg",
        cost:"$55",
        name:"Black Diamond Momentum Climbing Harness",
        description:"This all-purpose men's harness achieves surprising breathability and low weight while preserving the uncompromising security, comfort and durability for which Black Diamond is known."
        }*/
        ];         
	});

ngDemo.controller('winterController', function($scope)
    {
    $scope.winter =
        [
           /* {
            tripname: "Black Diamond Raven Ice Axe",
            price: "$80",
            image: "images/iceaxe2.jpg",
            description: "A traditional axe for legendary ascents, the trusty Black Diamond Raven delivers quality you can feel."
            },
            {
            tripname: "Black Diamond Contact Strap Crampons with ABS Plates",
            price: "$130",
            image: "images/crampons2.jpg",
            description: "Compact and easy to use, the 10-point Black Diamond Contact strap-on crampons are optimized for general mountaineering, backcountry skiing and glacier walking."
            },
            {
            tripname: "Rossignol Soul 7 Skis",
            price: "$750",
            image: "images/skis2.jpg",
            description: "Soul 7 skis deliver award-winning, freeride versatility, whether lapping freshly fallen powder or blasting through crud, and they carve responsively on hardpack snow and groomed runs."
            },
            {
            tripname: "Mountain Hardwear Lamina -30 Sleeping Bag",
            price: "$320",
            image: "images/sleepingbag2.jpg",
            description: "The Mountain Hardwear Lamina -30 sleeping bag uses insulation designed to provide high loft, durability, softness and compressibility to keep you warm in frigid winter weather."
            },
            {
            tripname: "Mountain Hardwear EV 3 Tent",
            price: "$850",
            image: "images/tent2.jpg",
            description: "Spacious, light and strong, the single-wall Mountain Hardwear EV 3 Tent shelters 3 climbers throughout 4 seasons of high-altitude expeditions."
            },*/
            {
            tripname: "Cactus Mountain Overnight",
            price: "$45",
            image: "images/cactusmountain.jpg",
            description: "Overnight camping trip in Poudre Canyon on top of 'Cactus Mountain'."
            },
        ];
   });

ngDemo.controller('productsController', function($scope) 
    {
    $scope.products=
        [
            {
            name: "Flannel Fleece Jackets",
            image: "images/Shirt.jpg",
            cost: "$50",
            description: "Hand made from scratch using materials of your choice, ethically sourced and no sweatshop workers...for now."
            },
            {
            name: "Tent (coming soon)",
            image: "images/tent.jpg",
            cost: "$400",
            description: "This is not a real tent, just a drawing."
            },/*
            {
            name: "Teva Cedar Canyon Waxed Leather Shoes",
            image: "images/shoes3.jpg",
            cost: "$90 (now $50)",
            description: "Soon to be your go-to casual kicks, the Teva Cedar Canyon Waxed Leather shoes feature classic looks for everyday wear. Cushioned insoles cradle your feet in comfort."
            },
            {
            name: "Marmot NanoWave 55 Sleeping Bag",
            image: "images/sleepingbag3.jpg",
            cost: "$80 (now $60)",
            description: "Stuff this super-packable sleeping bag into your kayak hatch or bike pannier. It’s a master space-saver and has synthetic SpiraFil high-loft insulation that stays warm even when damp."
            },*/
        ];
   });

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
