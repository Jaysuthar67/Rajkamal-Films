$(document).ready(function () {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '3977702964',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '2095215906.1677ed0.9599ac658e854f6bb2e147fed97f4700',
        sortBy: 'most-recent',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    userFeed.run();

});
// instagram acccess token = 2095215906.1677ed0.9599ac658e854f6bb2e147fed97f4700