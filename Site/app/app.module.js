var appModule = angular.module('appModule', ["ngAnimate", "uiGmapgoogle-maps"]);


appModule.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBlzM71YLGMzvelz7rgcAF1m7eL9yybG64',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
