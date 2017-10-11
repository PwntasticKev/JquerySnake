//jquery here:
// "What do I want to do"
// How I want to do it in english "Pseudo Code"
// Code
// What does the code do in english
// Does the code work
// Debug
// Repeat
$(document).ready(function() {
var food;
var snake = ['_0_0','_0_1','_0_2']
var direction = 'right';

var initiateGameWindow = function() {
    for (var r = 0; r < 20; r++) {
      for( var c = 0; c < 20; c++){
        var rowsColumns = `<div class='cell-square' id='cell_` + r + `_` + c + `'></div>`
        $('.window').append(rowsColumns)
      }
    }
    $('#cell_0_0').addClass("snake");
    $('#cell_0_1').addClass("snake");
    $('#cell_0_2').addClass("snake");
}


var randomFood = function() {
  var row = Math.floor(Math.random() * 20)
  var column = Math.floor(Math.random() * 20)
  $('#cell_' + row + '_' + column).addClass("food")
  food = '_' + row + '_' + column
}

var die = function() {
  clearInterval(animation)
  $('.snake').addClass('dead-snake')
}

var update = function() {

  var obj = {
    firstName: 'Kevin',
    lastName: 'Lee'
  }
  console.log(obj)




  var head = snake[snake.length - 1]
  console.log(snake)
  var coordinates = head.split('_')

  var row = Number(coordinates[1])
  var column = Number(coordinates[2])

  if(head !== food) {
    var tail = snake.shift()
    $('#cell' + tail).removeClass("snake")

  }
  if(head === food) {
    $('.food').removeClass("food")
    randomFood()
  }

  if(direction === 'right') {
    // do something for columns
    column = column + 1
    coordinates[2] = column
  } else if (direction === 'left') {
    // do something for columns
    column = column - 1
    coordinates[2] = column
  } else if (direction === 'down') {
    // do something with rows
    row = row + 1
    coordinates[1] = row
  } else if (direction === 'up') {
    // do something with rows
    row = row - 1
    coordinates[1] = row
  }

  if(column > 19 || column < 0) {
    die()
    // alert('YOU LOSE NARB')
    return
  }
  if(row > 19 || row < 0) {
    die()
    // alert('YOU LOSE NARB')
    return
  }

  coordinates = coordinates.join('_')

  snake.push(coordinates)
  $('#cell' + coordinates).addClass("snake")
}

var animate;

$(document).keydown(function(event) {
  var keyCode = event.which
  if(keyCode === 38) {
    direction = 'up'
  } else if (keyCode === 40) {
    direction = 'down'
  } else if (keyCode === 37) {
    direction = 'left'
  } else if (keyCode === 39) {
    direction = 'right'
  } else if (keyCode === 13) {
    update()
  }
})

initiateGameWindow()
randomFood()
// var animation = setInterval(update, 50)


});
