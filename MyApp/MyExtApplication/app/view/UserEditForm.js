Ext.define("MyApp.view.UserEditForm", {
    extend: "Ext.window.Window",
    padding: 5,
    width: 600,
    title: 'Edit UserDetails',
    model: 'true',
    items: [
        {
            xtype: 'form',
            bodypadding: 10,
            title: "",
            defaults: {
                labelWidth: 90,
                margin: '0 0 10 0',
                anchor: '90%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'Name',
                    fieldLabel: 'Name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'Runs',
                    fieldLabel: 'Runs',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'Wicket',
                    fieldLabel: 'Wicket',
                    allowBlank: false
                }
            ]
        },
        {
            xtype: 'container',
            padding: '10 10 10 10',
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'save',
                    margin: '5 5 5 5',
                    handler: function (button) {
                        let saveform = this.up().up().down('form');
                        saveform.updateRecord();
                        button.up('window').destroy();
                    }

                },
                {
                    xtype: 'button',
                    text: 'close',
                    margin: '5 5 5 5',
                    handler: function (button) {
                        button.up('window').destroy();

                    }
                }
            ]
        }
    ]

});