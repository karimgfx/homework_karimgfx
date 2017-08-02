$(function(){
    $('#quote').draggable();
    var pages = {
        'home': {
            'title': 'Home'

        },
        'projects': {
            'title': 'Projects',
            'gallery': [
                {'image':'img/gallery/1.png', 'info': 'This sucked'},
                {'image':'img/gallery/2.png', 'info': 'Fuck this'},
            ]
        },
        'about': {
            'title': 'About Us and our friends'
        },
        'team': {
            'title': 'Team that is great',
            'members': [
                {
                'file': 'mi.jpg',
                'name': 'Mi Dixon',
                'title': 'Coffee Specialist',
                'discription': 'Being able to get a lot of accomplished with no sleep'
                },
                {
                'file': 'karim.jpg',
                'name': 'Karim Ali',
                'title': 'Graphic Designer',
                'discription': 'Sees everything in green'
                },

                {
                 'file': 'josh.jpg',
                 'name': 'Josh Chu',
                 'title': 'Marketing',
                 'description': 'Never sits still',
                },
                {
                    'file': 'David.jpg',
                    'name': 'David Pettijohn',
                    'title': 'Expert movie watcher',
                    'description': 'Binge watching movies all day',
                },
                {
                    'file': 'aaron.jpg',
                    'name': 'Aaron Alvarado',
                    'title': 'The Streets',
                    'description': 'Meta visualization'
                },
                {
                    'file': 'jonathan.jpg',
                    'name': 'Jonathan Boswell',
                    'title': 'Chief Tech Guy',
                    'description': 'Building with Love and Patience'
                },
                {
                'file': 'nicole.jpg',
                'name': 'Nicole Bai',
                'title': 'Digital Marketing',
                'description': 'Non-stop sleeping'
                },
            ]
        }
    }

    function loadPages()
    {
        $.each(pages, function (key, value){
            var id = '#' + key;
            $(id + 'h2').html(value.title);
        });

        $.each(pages.projects.gallery, function(key, item)
        {
            console.log(item.image);
            var s = "";
            s += '<div class="col-xs-6">';
            s += '  <img src="' + item.image + '" class="img-thumbnail"/>';
            s += '</div>';
            $('#gallery').append(s);
        });

        //Load team members
        /*
                <div class="col-xs-2">
                        <div class="person">
                            <img src="img/karim.jpg" class="img-thumbnail img-circle"/>
                            <h3>Karim Ali</h3>
                            <h4>Graphic Design</h4>
                            <p>See's everything in green</p>
                        </div>
                    </div>
                </div>

        */
        $.each(pages.team.members, function(key, member){
            var s = "";

           s += '<div class="col-xs-offset-12">';
            s += '  <div class="person">';
            s += '      <img src="img/' + member.file + '" class="img-thumbnail img-circle"/>';
            s += '      <h3>' + member.name + '</h3>';
            s += '      <h4>' + member.title + '</h3>';
            s += '      <p>' + member.description + '</p>';
            s += '  </div>';
            s += '</div>';
            
           $('#members').append(s);
        });


    loadPages();

    //This just closes the "hamburger" menu whenever a menu item is clicked
    $('.nav a').on('mouseOver', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').mouseOver();
        }
    });
});