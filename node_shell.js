const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'26da2bc9-1824-450b-956d-fdb98d6f5fc6'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
