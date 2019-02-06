
Ext.define("MyApp.view.MainView", {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'border',

    },
    collapsed: false,
    items: [{

        region: 'west',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        split: true,
        flex: 1,
        items: [
            {
                xtype: 'sessiongridpanel',
                flex:3
            },
            {
                xtype: 'splitter',
                width: 1

            },

            {

                html: '<b>Presenter</b>',
                flex: 3,
                xtype: 'panel'

            }]
    },

    {
        region: 'center',
        layout: {
            type: 'vbox',
            align : 'stretch'
        }, 
        split: true,
        flex: 1,
        items: [
            {
                html: '<b> Live Scores</b>',
                flex: 3,
                xtype:'panel'
            },
            {
                xtype: 'splitter',
                width :1
            },
            {
                html: '<b>Score Here</b>',
                flex: 3,
                xtype:'panel'
            }
        ]
    }]

});