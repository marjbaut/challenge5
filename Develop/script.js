// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//PUT DATE IN HEADER
var todayDate = dayjs();
$('#currentDay').text(todayDate.format('MMMM D, YYYY'));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 
 var desBox = document.querySelector('.description').value ;
//funtion to save input 
var dataInput = $(this).siblings('.description').val();




 // USER CLICKS SAVE
$('.saveBtn').on('click', function(event){
    console.log('you clicked save');
    event.preventDefault();
  //var input text by user 
    var dataInput = $(this).siblings('.description').val();
  localStorage.setItem('dataInput', dataInput);
})







 //Function
  //save data input
  
  // display data input after refresh


//Save data in local storage
//  function saveInput(dataInput){
//   localStorage.setItem('dataInput', jason.stringify(dataInput));  
// }
//  var dataInput = readInput();
// //Display saved area and returns array
// function readInput(){
//   var dataInput = localStorage.getItem('dataInput');
//   if (dataInput !== null){
//    return; 
//   } else{
//    return dataInput= JSON.parse(dataInput);
//   }
// }


//  var saveButton = document.querySelector('.btn');
//   var toDoText = document.querySelector('.description');
//   var example;
//////-----------ONE FUNCTION
// saveButton.addEventListener('click', function(event){ 
//   event.preventDefault();
//   console.log ('test SAVE');  
//   var toDoText= {
// }
// example = doc
// localStorage.setItem('toDoText', JSON.stringify(toDoText));
//       renderMessage();
//  });     

// function renderMessage(){
//   var toDoText = JSON.parse(localStorage.getItem("toDoText"));
//   // var test = JSON.parse(localStorage.getItem('toDoText'));
//   if( toDoText!== null){
//     var toDoText = JSON.parse(localStorage.getItem("toDoText"));
//     toDoText.textContent = toDoText.text ;
  
// }
// }
//-------------FUNCTION
//  saveButton.addEventListener('click', function(event){ 
//   console.log ('test SAVE');
//     event.preventDefault();
//     localStorage.setItem('toDoText', JSON.stringify(toDoText));

//     // localStorage.getItem('toDoText',);
//       if( toDoText !== null ) {
//         JSON.parse(localStorage.getItem(toDoText));
//         console.log(toDoText); 
// }});



  
  // toDoText.textContent= toDoText;
// function saveButton (){
//     var input = document.querySelector('.description').value;
//     input.innerHTML = (input);

// }


  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
