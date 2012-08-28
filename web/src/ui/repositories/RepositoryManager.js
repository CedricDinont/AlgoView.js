var RepositoryManager = function() {
	this.locations = new Array();
}

var Location = function(name) {
	this.name;
}

Ext.define('Repository', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' }
    ],
    proxy: {
        type: 'ajax',
        api: {
            create: 'createLocation.php',
            read: 'readLocation.php',
            update: 'updateLocation.php',
            destroy: 'destroyLocation.php'
        }
    }

});

var locationsStore = Ext.create('Ext.data.TreeStore', {
    model: 'Location',
    root: {
        name: 'Locations',
        expanded: true
    }
});

Ext.create('Ext.tree.Panel', {
    renderTo: Ext.getBody(),
    width: 300,
    height: 200,
    title: 'People',
    store: store,
    columns: [
        { xtype: 'treecolumn', header: 'Name', dataIndex: 'name', flex: 1 }
    ]
});
