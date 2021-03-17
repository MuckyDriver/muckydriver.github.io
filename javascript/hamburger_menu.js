$(document).ready(function(){
    var link = document.getElementById('minimenu-ham');
    const timer = 150
    var open = false
    $('#OpenHamMenu').click(function(){
      if (open === false) {
        link.style.display = 'block'
        link.animate([
            { left: '-250px'}, 
            { left: 0 }
          ], { 
            duration: timer,
          });
          open = true
      }
      else if (open === true) {
        link.animate([
          { left: 0 }, 
          { left: '-250px' }
          ], { 
            duration: timer,
        });
        setTimeout(()=>{ link.style.display='none'; }, 140);
        open = false
      }
    })
    $('#CloseHamMenu').click(function(){
        if (open === true) {
        link.animate([
          { left: 0 }, 
          { left: '-250px' }
          ], { 
            duration: timer,
        });
        setTimeout(()=>{ link.style.display='none'; }, 140);
        open = false
    }
  })
})