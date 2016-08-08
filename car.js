var x;

function createCar(make, model, year, color) {
  var speed = 0;
  return {
    carMake: make,
    carModel: model,
    carYear: year,
    carColor: color,
    getSpeed: function() {return speed;},
    accelerate: function() {
      if (speed >= 76) {
          speed = 85;
        } else {
      speed = speed + 10;}
    },
    brake: function() {
      if (speed <=7){
        speed = 0;}
      else {
      speed = speed - 7;}
      },
    failedBrake: function(){
      var slow = getRandom(0, Math.floor(speed/2));
      speed = speed - slow;
    },
    getData: function() { return this.carMake+" "+ this.carModel+" "+this.carYear+" "+this.carColor}
    // accelerateTo50: function(){
    //   while (speed < 50){
    //     this.accelerate();
    //   }
    // },
    // stop: function(){
    //   while (speed > 6){
    //     this.brake();
    //   }
    //   while (speed > 0){
    //     speed--;
    //   }
    // }
  };
}

$(document).ready(function(){

$("#submitButton").on("click", function(){
  x = createCar(($("#carMake").val()),
  ($("#carModel").val()),
  ($("#carYear").val()),
  ($("#carColor").val()));

 $("#outPut").text(x.getData());
})

$("#gasPedal").on ("click", function (){
  x.accelerate();
  $("#speed").text(x.getSpeed());
  if (x.getSpeed() > 0) {
    $("#brake").show();
  }
  if (x.getSpeed()>=70) {
    $("#speed").addClass("speed");
  }
  if (x.getSpeed() ===85) {
    $("#gasPedal").hide();
  }
})



$("#brake").on ("click", function (){
  x.brake();
  $("#speed").text(x.getSpeed());
  if (x.getSpeed() < 85) {
    $("#gasPedal").show();
  }
  if (x.getSpeed() === 0) {
    $("#brake").hide();
  }
  if(x.getSpeed()<=69) {
    $("#speed").removeClass("speed");
  }
})





}) // end document.ready
