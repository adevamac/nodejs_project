const pal ={
    index:(req, res)=>{
        res.render('index', { activePage: 'index' });
    },
    about:(req, res)=>{
        res.render('about', { activePage: 'about' });
    },
    contact:(req, res)=>{
        res.render('contact', { activePage: 'contact' });
    },
    educational:(req, res)=>{
        res.render('educational', { activePage: 'educational' });
    },

    address:(req, res)=>{
        res.render('address', { activePage: 'address' });
    },
    favorite:(req, res)=>{
        res.render('favorite', { activePage: 'favorite' });
    }

}

module.exports = pal;