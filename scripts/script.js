window.onresize = function() {
        if (matchMedia) {
          var mq = window.matchMedia("(max-width: 640px)");
          mq.addListener(WidthChange);
          WidthChange(mq);
        }

        // media query change
        function WidthChange(mq) {

          if (mq.matches) {
            document.getElementById('toogle').style.display = 'block';
          }
          else {
            document.getElementById('toogle').style.display = 'none';
          }

        }
      }

     $(document).ready(function() {
        var click = 0;
        var csh = window.getComputedStyle(menum,null).getPropertyValue("height");
        $('#menuc').click(function() {
            if(click == 0){
                csh = window.getComputedStyle(menum,null).getPropertyValue("height");
                //document.getElementById("p").innerHTML = csh;
                csh = parseInt(csh)+15;
                document.getElementById("container").style.marginTop = parseInt(csh);
                document.getElementById("menum").style.opacity = '1';
                document.getElementById("menuc").style.color = '#89D0FF';
                //$('#container div').css('margin-top', ''+csh+'apx !important');
                //$(this).css('right', '4px');
                click = 1;
            }else{
                csh = window.getComputedStyle(menum,null).getPropertyValue("height");
                //document.getElementById("p").innerHTML = csh;
                document.getElementById("container").style.marginTop = 15;
                document.getElementById("menuc").style.color = '#FFFFFF';
                //$('#container div').css('margin-top', ''+csh+'apx !important');
                //$(this).css('right', '0px');                
                click = 0;
            }
        });
    });