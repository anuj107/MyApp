Ext.define("MyApp.controller.UserControl", {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            "sessiongridpanel": {
                itemdblclick: function (gridpanel, record, item, e) {
                    let myForm = Ext.create("MyApp.view.UserEditForm");
                    let formdetails = myForm.down('form');
                    formdetails.loadRecord(record);
                    console.log(this);

                    myForm.show();
                }
            }
        });
    }
});
