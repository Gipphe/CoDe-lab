const fs = require('fs');

for (var i = 100; i < 200; i += 1) {
	fs.writeFileSync(i + '.txt', i);
}
