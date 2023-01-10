const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'f2675835-2d9e-45bf-a4a3-76409a74ba2c'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
