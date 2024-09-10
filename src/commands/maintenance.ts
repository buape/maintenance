import { type APIApplicationCommandBasicOption, ApplicationCommandOptionType, Command, type CommandInteraction } from "@buape/carbon";

export class Maintenance extends Command {
	name = "*"
	description = "Maintenance mode"
	defer = true
	ephemeral = true

	async run(interaction: CommandInteraction) {
		await interaction.reply({ content: "We're currently under maintenance! Please try again later.\nhttps://discord.gg/5JqQYfts?event=1282791038695768095" }, { ephemeral: true })
	}
}