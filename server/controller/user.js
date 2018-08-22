const Login = async(ctx) => {
    const username = ctx.request.body.name;
    console.log('username', username);
    ctx.status = 200;
    ctx.body = {
        success: true,
        username
    };
};

module.exports = {
    Login
};
