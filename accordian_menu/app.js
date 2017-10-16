var coding = ["Javascript", "jQuery", "Ruby"];

$('.accordian').on('click', function(event){
  $(event.target).closest('.accordian').find('.list').toggleClass('active');
  // console.log(event.target.textContent);
});

coding.forEach(function(elem){
  $('.list ul').append($('<li>').text(elem));
});
