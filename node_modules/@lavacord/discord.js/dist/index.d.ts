import { Manager as LavacordManager, LavalinkNodeOptions, ManagerOptions } from "lavacord";
import { Client as DiscordClient } from "discord.js";
export * from "lavacord";
export declare class Manager extends LavacordManager {
    readonly client: DiscordClient;
    constructor(client: DiscordClient, nodes: LavalinkNodeOptions[], options?: ManagerOptions);
}
