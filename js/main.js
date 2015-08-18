/* global require: false */
define(function () {
    var scriptBase = "js",
        appConfig;
    
    appConfig = {
        "baseUrl": scriptBase,
        "paths": {
            "sky": 'sky'
        }
    };

    require.config(appConfig);
    require(['app']);
});
