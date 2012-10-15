(function ($) {
        $.fn.convertISOinterval = function() {
          
            var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            return this.each(function() {
              
            $(this).each(function(i, obj) {
                if ($(this).attr("data-interval")) {
                    var dtArray = $(obj).attr("data-interval").split(',');
                    dtArray.sort();      // sort
                    var startdt, enddt, numday, str;						
                    startdt = new Date(dtArray[0]);
                    enddt  = new Date(dtArray[dtArray.length-1]);
                    numday =    dtArray.length;
                    if (InYear(startdt, enddt)) {
                        if (InMonth(startdt, enddt)) {
                            str = month[startdt.getMonth()] + "   " + startdt.getDate() + " - " + enddt.getDate() + ", " + numday + " days";
                        }
                        else {
                            str = month[startdt.getMonth()] + "   " + startdt.getDate() + " - " + month[enddt.getMonth()]  + "  " + enddt.getDate() + ", " + numday + " days";
                        }							 
                     }
                     else {
                          str =startdt.getFullYear() + " " + month[startdt.getMonth()] + "   " + startdt.getDate() + " - " +  enddt.getFullYear() + " " + month[startdt.getMonth()] +" " +  enddt.getDate() + ", " + numday + " days";
                     }
                     $(obj).html(str);	
            }																		 
         });
										
       function InYear(sd, ed) {
           return (sd.getFullYear() === ed.getFullYear());
       }
              
       function InMonth(sd, ed) {
           return (sd.getMonth() === ed.getMonth());
       }
  });										
};
}) ( jQuery );