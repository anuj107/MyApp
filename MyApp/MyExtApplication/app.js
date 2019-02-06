Ext.Loader.setConfig({
    enabled : true
});

Ext.application({
    name: 'MyApp',
    requires: [
        'MyApp.view.MainView'
    ],
    views: [
        'UserDetails'
    ],
    stores: [
        'UserStore'
    ],
    controllers: [
        'UserControl'
    ],
    models: [
        'UserData'
    ],
    launch: function () {
        Ext.create('MyApp.view.MainView');
    }
});