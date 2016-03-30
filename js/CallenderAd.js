$(document).ready(function() {
  
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    var calendar = $('#calendar').fullCalendar({
      header: {
        

        left: 'prev,next today',
        left: 'title'

      },
      
      
      events: 
      [
        /*
          - EACH EVENT HAS
            ID
            TITLE
            optional - START
            optional - END
            URL LINK TO THE INFO
        */

        {
          
          title: "O'Bhial Poetry Night",
          start: new Date(2016, 2, 7),
          url: 'https://www.facebook.com/obheal.poetry/?fref=ts'

        },
        {
          
          title: "O'Bhial Poetry Night",
          start: new Date(2016, 2, 14),
          url: 'https://www.facebook.com/obheal.poetry/?fref=ts'

        },

        {
          title: "O'Bhial Poetry Night",
          start: new Date(2016, 2, 21),
          url: 'https://www.facebook.com/obheal.poetry/?fref=ts'

        },

        {
          title: "O'Bhial Poetry Night",
          start: new Date(2016, 2, 28),
          url: 'https://www.facebook.com/obheal.poetry/?fref=ts'

        },

        {
          title: "O'Bhial Poetry Night",
          start: new Date(2016, 3, 4),
          url: 'https://www.facebook.com/obheal.poetry/?fref=ts'

        },

        {
          title: "Stanza Poetry Night",
          start: new Date(2016, 2, 25),
          url: 'https://www.facebook.com/StanzasLCK/?fref=ts'

        },

        {
          title: "Live Words Poetry Night",
          start: new Date(2016, 2, 31),
          url: 'https://www.facebook.com/events/1667056783558064/'

        },



        

      ]
    });
    
  });