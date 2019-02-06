function SendDetails() {
    var username = document.getElementById('usr_name').value;
    var intern_choice = document.getElementById('usr_intern').checked;
    var full_choice = document.getElementById('usr_fulltime').checked;
    var role_choice = (intern_choice) ? "Intern" : "Full Time";
    var email = document.getElementById('usr_email').value;

    Ext.define("MyClass", {
        extend: 'Ext.data.Model',
        field: [
            { name: 'name', type: 'string' },
            { name: 'Role', type: 'string' },
            { name: 'Email', type: 'string'}
        ],
        proxy: {
            type: 'rest',
            url: '/api/Details/MyMethod',
            
            reader: {
                type: 'json'
            }
        }
    });

    let user_details = Ext.create("MyClass",{
        name: "Darshan M",
        Role: "Intern",
        Email: "darshan"
    });
    user_details.save();
}