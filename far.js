const fs = require('fs');

for (var i = 0; i < 10; i += 1) {
	fs.writeFileSync('foo' + i, 'foo' + i);
}
