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
        .when('/onsale', 
              {
              templateUrl : 'pages/onsale.html',
              controller  : 'onsaleController'
			  });
	});

ngDemo.controller('homeController', function($scope) 
    {
    $scope.images=
        [
        {
          expedition: "Aconcagua",
          days: "21 day expedition",
          image: "images/aconcaguaexp.jpg"
        },
        {
          expedition: "Denali",
          days: "14 day expedition",
          image: "images/denali.jpg"
        }
        ];
	});

function modal()
{
    
}

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
        image:"images/bike1.jpg",
        cost:"$3500",
        name:"Cannondale Fat CAAD 1 Bike - 2016",
        description:"With a premium lefty fork, 1x drivetrain and system integrated technology, the Fat CAAD 1 has all the fun, floaty traction of a fat bike plus the heart and soul of a racer."
        },
        {
        image:"images/kayak1.jpg",
        cost:"$850",
        name:"Riot Magnum 80 Whitewater Kayak",
        description:"The Magnum 80 has the right length and shape to easily punch through features without losing too much momentum and ending up going vertical. It's buoyant yet maneuverable."
        },
        {
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
        }
        ];         
	});

ngDemo.controller('winterController', function($scope)
    {
    $scope.winter =
        [
            {
            name: "Black Diamond Raven Ice Axe",
            cost: "$80",
            image: "images/iceaxe2.jpg",
            description: "A traditional axe for legendary ascents, the trusty Black Diamond Raven delivers quality you can feel."
            },
            {
            name: "Black Diamond Contact Strap Crampons with ABS Plates",
            cost: "$130",
            image: "images/crampons2.jpg",
            description: "Compact and easy to use, the 10-point Black Diamond Contact strap-on crampons are optimized for general mountaineering, backcountry skiing and glacier walking."
            },
            {
            name: "Rossignol Soul 7 Skis",
            cost: "$750",
            image: "images/skis2.jpg",
            description: "Soul 7 skis deliver award-winning, freeride versatility, whether lapping freshly fallen powder or blasting through crud, and they carve responsively on hardpack snow and groomed runs."
            },
            {
            name: "Mountain Hardwear Lamina -30 Sleeping Bag",
            cost: "$320",
            image: "images/sleepingbag2.jpg",
            description: "The Mountain Hardwear Lamina -30 sleeping bag uses insulation designed to provide high loft, durability, softness and compressibility to keep you warm in frigid winter weather."
            },
            {
            name: "Mountain Hardwear EV 3 Tent",
            cost: "$850",
            image: "images/tent2.jpg",
            description: "Spacious, light and strong, the single-wall Mountain Hardwear EV 3 Tent shelters 3 climbers throughout 4 seasons of high-altitude expeditions."
            },
            {
            name: "Backcountry Access DTS Rescue Package",
            cost: "$320",
            image: "images/avalanchesafety2.jpg",
            description: "Whether you're just getting into backcountry skiing or replacing old equipment, the Backcountry Access DTS Rescue Package supplies you with 3 pieces of required gear: a transceiver, shovel and probe."
            },
        ];
   });

ngDemo.controller('onsaleController', function($scope) 
    {
    $scope.onsale=
        [
            {
            name: "Werner Skagit Paddle",
            image: "images/paddle3.jpg",
            cost: "$130 (now $80)",
            description: "The Skagit paddle from Werner offers beginning and recreational paddlers excellent value and performance."
            },
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
            },
        ];
   });

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
