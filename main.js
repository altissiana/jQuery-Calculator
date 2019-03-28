$(function(){

   $("#add").on("click", function(e){
     var num1 = Number($("#num1").val())
     var num2 = Number($("#num2").val())


     $("#answer").html(num1 + num2)

   })

   $("#subtract").on("click", function(e){
      var num1 = Number($("#num1").val())
      var num2 = Number($("#num2").val())
 
 
      $("#answer").html(num1 - num2)
 
    })

    $("#multiply").on("click", function(e){
      var num1 = Number($("#num1").val())
      var num2 = Number($("#num2").val())
 
 
      $("#answer").html(num1 * num2)
 
    })

    $("#divide").on("click", function(e){
      var num1 = Number($("#num1").val())
      var num2 = Number($("#num2").val())
 
 
      $("#answer").html(num1 / num2)
 
    })
})

