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