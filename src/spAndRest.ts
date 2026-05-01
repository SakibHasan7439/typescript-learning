const friends = ['Alhaz', 'Shuvo', 'Sabbir'];
const schoolFriends = ['Ashik', 'Siam', 'Shihab'];
const universityFriends = ['Sadiq', 'Imran', 'Tuhin'];

friends.push(...schoolFriends);

friends.push(...universityFriends);
console.log(friends);

const user = {name: 'sakib', email: 'sakibhasan16h@gmail.com'};
const otherInfo = {hobby: 'outing', favoriteColor: 'Blue'};

const userInfo = {...user, ...otherInfo};

console.log(userInfo);


const sentInvitation = (...friends: string[]) => {
    friends.forEach((friend) =>console.log(`sent invitation to ${friend}`)
    )
}

sentInvitation('imran', 'sadiq', 'towfig', 'tuhin');