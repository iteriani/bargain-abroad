    module.exports = {
        randomString: function() {
            return Math.random().toString(36).substring(7);
        },
        randomHash: function(length) {
            var c, i, value;

            if (length == null) {
                length = 10;
            }
            value = this.randomString();
            if (length > 10) {
                i = 0;
                c = Math.ceil(length / 10);
                while (i < c) {
                    value += this.randomString();
                    i++;
                }
            }
            return value.substring(0, length);
        }
    };
