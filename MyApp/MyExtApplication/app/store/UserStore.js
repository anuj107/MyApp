Ext.define("MyApp.store.UserStore", {
    extend: 'Ext.data.Store',
    model:'MyApp.model.UserData',
    autoLoad: true,
    autoSync: true,
    
                
    sorters: [
        {
            property: 'Team',
            direction:'DESC'
        }
    ],
    groupField: 'Team',
    groupDir: 'DESC'
});