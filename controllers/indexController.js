class Index {
    static showIndex(req, res){         // this renders the homepage to the brower. 'render' looks in views 
        res.render("layout.ejs");        // redirected from ../routes/routes.js
    }
}
module.exports = Index;