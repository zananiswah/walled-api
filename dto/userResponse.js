class UserResponse{
    constructor(user){
        this.username = user.username;
        this.fullname = user.fullname;
        this.email = user.email;
        this.balance = user.balance;
    }
}

module.exports = {UserResponse};