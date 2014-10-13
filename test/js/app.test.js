suite('CATS vs DOGS SPA', function() {
    test('App should be initiated', function() {
        var loc = window.location.href,
            index = loc.indexOf('#');

        if (index > 0) {
            window.location = loc.substring(0, index);
        }
        assert.ok(window.CatsVsDogs);
    });
    test('Correct route captured', function() {
        var router = window.CatsVsDogs.router,
            route = 'cats';
        router.navigate(route, {
            trigger: true
        });
        if (window.CatsVsDogs.view === route) {
            assert.ok(route);
        }
    });
});