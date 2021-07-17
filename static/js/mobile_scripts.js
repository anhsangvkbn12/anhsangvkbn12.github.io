var objArr = [];
var delayTime = 6000;
var objCount = 0;

var initPage = function() {
    //for testing
    countObj();
    initObj();
    setTimeout(runEffect, 2000);
};

var countObj = function() {
    $('.map').find('.people').each(function() {
        var obj = $(this);
        objArr.push(obj);
    });
    //console.log(objArr.length);
};

var initObj = function() {
    for (var i = 0; i < objArr.length; i++) {
        var obj = objArr[i];

        obj.find('.body').css({ opacity: 0, marginTop: -100 });
        obj.find('.body').delay(100 * i).animate({
            opacity: 1,
            marginTop: 0
        }, 900, 'easeInOutElastic', function() {
            // Animation complete.
        });
    }

};

var runEffect = function() {
    var obj = objArr[objCount];

    obj.addClass('active');
    obj.find('.effect').show();

    setTimeout(function() {
        obj.find('.typewriter').addClass('active');
    }, delayTime / 4);

    setTimeout(function() {
        if (!obj.find('.pop').hasClass('active')) {
            obj.find('.pop').addClass('active');
        }
    }, delayTime / 5);

    setTimeout(function() {
        obj.removeClass('active');

        //hide current obj
        obj.find('.effect').hide();

        obj.find('.typewriter').removeClass('active');

        //count item
        objCount++;
        if (objCount >= objArr.length)
            objCount = 0;

        //run next obj effect
        runEffect();

    }, delayTime)
};