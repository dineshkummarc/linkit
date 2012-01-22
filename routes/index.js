
/*
 * GET home page.
 */


exports.index = function(req, res){
    console.log(req.url);
    console.log(req.headers);
    console.log(req.cookies);
    res.render('index', { title: 'Express' })
};


exports.login = function(req, res){
    res.render('login', { title: 'Login:' })
};

exports.home = function(req, res){
    res.render('home', { title: 'Home:' })
};

exports.register = function(req, res){
    res.render('register', { title: 'Register:' })
}
