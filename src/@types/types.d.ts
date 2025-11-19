declare global {
    interface IPlayer {
        new (player: Internal.Player): IPlayer
        uuid: string,
        player: Internal.Player,
        updateInventoryLoss(playerData: IPlayerData): IPlayerData,
        clearInventory(): void,
    }

    interface IPlayerDataIO {
        file: string,
        playerData: IPlayerData;
        new (world: string, uuid: string): IPlayerData,
        getPlayerData(): IPlayerData,
        updatePlayerData(playerData: IPlayerData): void
    }
    
    interface IPlayerData {
        totalDeaths: number;
        itemsLost: number;
        blocksLost: number;
        deathTimeStamp: number;
    }

    namespace Internal {
        interface CompoundTag {
            worldUUID: string
        }
    }
}

export {};