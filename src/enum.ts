enum UserRole {
    Admin  = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }else return false;
}

const hasPermissionToEdit = canEdit(UserRole.Viewer);
console.log({hasPermissionToEdit});