//@ts-nocheck
EntityEvents.death(event => {
    if (!event.entity.isPlayer()) {
        return;
    }

    const player = new global.Player(event.entity) as IPlayer;
    const playerDataIO = new global.PlayerDataIO(player.uuid, event.server.persistentData.worldUUID) as IPlayerDataIO;
    const newStats = player.updateInventoryLoss(playerDataIO.getPlayerData);
    newStats.totalDeaths += 1;
    newStats.deathTimeStamp = Date.now();
    playerDataIO.updatePlayerData();
    player.clearInventory();
})