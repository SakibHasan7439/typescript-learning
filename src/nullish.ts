type UserResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
};

function getZipCode(userResponse:UserResponse) {
    return userResponse?.info?.address?.zipCode ?? "00000";
};

const userResponse: UserResponse = {
    info: {
        address: {
            zipCode: "32939"
        }
    }
}
console.log(getZipCode(userResponse));