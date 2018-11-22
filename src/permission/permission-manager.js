
//relate permissions to roles
module.exports = class PermissionManage
{
	constructor(main, permissionMap)
	{
		this.rolePermissions = [];
		this.main = main;
		this.permissionMap = permissionMap;
	}
    

};