Ext.application({
    name: 'MyApp',
    launch: function () {

        Ext.define("SessionForm", {
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
                        anchor:'90%'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'u_name',
                            fieldLabel: 'Username',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'subs',
                            fieldLabel: 'Subscribers',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'u_email',
                            fieldLabel: 'Email Id',
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
                        pack:'center'
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
        let sessionStore = Ext.create("Ext.grid.Panel", {

            listeners: {
                itemdblclick: function (gridpanel, record, item, e) {
                    let myForm = Ext.create("SessionForm");
                    let formdetails = myForm.down('form');
                    formdetails.loadRecord(record);
                    console.log(this);
                    
                    myForm.show();
                }
                
            },
            store: {
                fields: ['id', 'u_name', 'u_email','subs','date'],
                autoLoad: true,
                autoSync: true,
                proxy: {
                    type: 'rest',
                    url: '/MyExtApplication/MyFile/userdetails.json',
                    reader: {
                        type: 'json',
                        root : 'data'
                    }
                },
                
                sorters: [
                    {
                        property: 'subs',
                        direction:'DESC'
                    }
                ],
                groupField: 'subs',
                groupDir: 'DESC'
            },
            
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'u_id',
                    text: 'Id',
                    
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'u_name',
                    text: 'Name',
                    flex : 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'u_email',
                    text: 'Email',
                    flex : 1

                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subs',
                    text: 'Subscribers'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'date',
                    text: 'Date Of Joining',
                    flex : 1
                }
            ],
            features: [
                {
                    ftype: 'grouping',
                    
                }
            ]
            
        });
        Ext.create('Ext.container.Viewport', {
            
            layout: {
                type: 'border',
                
            },
            collapsed: false,
            items: [{
                
                region: 'west',
                layout: {
                    type: 'vbox',
                    align : 'stretch'
                },
                split: true,
                flex: 1,
                items: [
                    sessionStore,
                {
                    xtype: 'splitter',
                    width : 1
                    
                },

                {
                    
                    html: '<b>Presenter</b>',
                    flex: 3,
                    xtype: 'panel'

                }]
            },
               
                {
                    region : 'center',
                    xtype: 'panel',
                    html: '<b>Session Details</b>',
                    flex: 1,    
                }]
        });
    }
})