Ext.define("MyApp.view.UserDetails", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessiongridpanel',
    
    store: 'UserStore',

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'Name',
            text: 'Name',

        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'Runs',
            text: 'Runs',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'Wicket',
            text: 'Wicket',
            flex: 1

        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'Team',
            text: 'Team'
        }
       ],
    features: [
        {
            ftype: 'grouping',

        }
    ]

});