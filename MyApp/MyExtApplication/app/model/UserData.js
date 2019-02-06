Ext.define("MyApp.model.UserData", {
    extend: 'Ext.data.Model',
    fields: ['Name', 'Runs', 'Wicket', 'Team'],
    proxy: {
        type: 'rest',
        url: '/MyExtApplication/MyFile/csvjson.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});