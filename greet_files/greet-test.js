describe('Greet', function () {
    it('should show name greeted in venda', function () {
        var message = Greetings()
message.setNames('Zena')
        assert.equal(message.greetMessage(),'Ndaa, Zena',);
    });

    it('should show name greeted in Nama', function () {
        assert.equal('Asive', '');


    });

    it('should show name greeted in Tsonga', function () {
        assert.equal('Lakhe', '');


    });
});
