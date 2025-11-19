const PlayerDataIO = function(this: IPlayerDataIO, world: string, uuid: string) {
    this.file = `kubejs/data/${uuid}.json`;
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
        console.log(this.file);
        console.log(" ");
        console.log(playerData);
        JsonIO.write(this.file as any, playerData as any);
    }
}

//@ts-ignore
global.PlayerDataIO = PlayerDataIO;