
// Variabless
let myInterval
let count = 0;
let hide = false; 
let timeStart = true;

$(document).ready(function(){
     
      $('#stopstart').on('mousedown',function(){ 
            if (timeStart){ 
                  $('#display').show()
                  $('#timelock').hide()
                  console.log('it is true');
                  // resets count 
                  count = 0;
                  myInterval = setInterval(function(){     
                        // incrases count per 1ms
                        count+
                        //displays count per 1ms  
                        $('#display').html((count++) +' ms');
                        console.log('one count');
                  },1)
                  timeStart = !timeStart;
            } 
          
            else { 
                  $('#timelock').hide();
                  console.log('it is false');
                  clearInterval(myInterval);
                  timeStart = !timeStart;
            }
            
      })
     $('#timerunner').on('mousedown',function() { 
            $('#timeLock').html((count) + ' ms');

            if (timeStart){ 
                  count = 0
                  console.log('confirm time pause');
                  clearInterval(myInterval);
                  $('#display').html((count) + ' ms')
                  $('#timeLock').hide();
                  console.log(count)
            }
            // if hide it will invert and hide main dislpay and show the paused time 
            if (hide) { 
                 hide = !hide
                  $('#display').hide();
                  $('#timeLock').show();
                  $('body').append(' '+(count)).css({ 
                        'text-align': 'center',
                        'font-size': '2rem',
                  });
            // Wil invert hide and show main display and hide the paused
           }else { 
                 hide = !hide
                  $('#display').show();
                  $('#timeLock').hide();
            
           }
     
           
     })     
    
      
})    