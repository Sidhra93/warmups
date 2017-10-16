var myResults = [
  {
    name: "six pack of beer",
    location:
    {
      lat: 37.767182,
      long: -122.5
    }
  },
  {
    name: "whacky glasses",
    location:
    {
      lat: 37.767182,
      long: -122.51
    }
  },
  {
    name: "whiskey bottle",
    location:
    {
      lat: 37.767282,
      long: -122.49
    }
  },
  {
    name: "diving goggles",
    location:
    {
      lat: 37.770282,
      long: -122.503
    }
  },
  {
    name: "running shoes",
    location:
    {
      lat: 37.7669,
      long: -122.457
    }
  },
  {
    name: "paint brushes",
    location:
    {
      lat: 37.76800,
      long: -122.4580
    }
  }];

var currentLocation = function(lat, long){
  myResults.forEach(function(result){
    latDistance = result.location.lat - lat;
    longDistance = result.location.long - long;
    distance = Math.pow(longDistance, 2) + Math.pow(latDistance, 2);
    result.distance = Math.sqrt(distance);
  });
  myResults.sort(function(a, b){return a.distance - b.distance})
  myResults.forEach(function(result){
    console.log(result.name + " "+ result.distance);
  });
}
