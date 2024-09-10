import type { ExecutionContext } from "@cloudflare/workers-types/2023-07-01"

import { Maintenance } from "./commands/maintenance.js"
import { Client, ClientMode } from "@buape/carbon"

type Env = {
	CLIENT_ID: string
	PUBLIC_KEY: string
	DISCORD_TOKEN: string
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const client = new Client(
			{
				clientId: env.CLIENT_ID,
				publicKey: env.PUBLIC_KEY,
				token: env.DISCORD_TOKEN,
				mode: ClientMode.CloudflareWorkers,
				autoDeploy: false
			},
			[
				new Maintenance()
			]
		)
		const response = await client.router.fetch(request, ctx)
		return response
	}
}