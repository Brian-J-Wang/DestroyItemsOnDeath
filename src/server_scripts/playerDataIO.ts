const PlayerDataIO = function(this: IPlayerDataIO, world: string, uuid: string) {
    this.file = `kubejs/data/${world}/${uuid}`;
    this.playerData = {
        totalDeaths: 0,
        itemsLost: 0,
        blocksLost: 0,
        deathTimeStamp: 0,
    };

    Object.assign(this.playerData, JsonIO.read(this.file as any));

    this.getPlayerData = function() {
        return this.playerData;
    }

    this.updatePlayerData = function(playerData: IPlayerData) {
        JsonIO.write(this.file as any, playerData as any);
    }
}

//@ts-ignore
global.PlayerDataIO = PlayerDataIO;