const signOut = (req, res) => {
    res.cookie('jwt','',{maxAge:1});
    res.send('success');
};

module.exports = signOut;
