// $('#tweet').on('click',function(event){
//   event.preventDefault();
//   var $target = $(event.target)
//   var content = $(event.target).parent().find('#new-tweet').val();
//   $.ajax({
//     type: 'POST',
//     url: '/tweet',
//     contentType: 'application/json',
//     data: JSON.stringify({content: content}),
//     success: function(response){
//       // console.log(response)/
//     }
//   })
// })