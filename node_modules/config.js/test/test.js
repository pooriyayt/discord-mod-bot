var expect = require("expect.js");

var config = require("../index.js");

describe("config.js", function() {
    it("should export a getConfig() function", function() {
        expect(config.getConfig).to.be.a("function");
    });
    describe("#getConfig()", function() {
        it("should return an object", function() {
            expect(config.getConfig()).to.be.an("object");
        });
        describe("test.js.config", function() {
            var cfg;
            before(function() {
                cfg = config.getConfig();
            });
            it("should have a key, 'foo' which is the string 'bar'", function() {
                expect(cfg).to.have.key("foo");
                expect(cfg.foo).to.be.a("string");
                expect(cfg.foo).to.be("bar");
            });
        });
    });
});
