const UserRole = {
    Admin  : "ADMIN",
    Editor : "EDITOR",
    Viewer : "VIEWER"
} as const;

const canEdit = (role: typeof UserRole[keyof typeof UserRole]) => {
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }else return false;
}

const hasPermissionToEdit = canEdit(UserRole.Viewer);
console.log({hasPermissionToEdit});