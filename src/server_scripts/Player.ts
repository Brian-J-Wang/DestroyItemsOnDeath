//priority: -1
const Player = function(this: IPlayer, player: Internal.Player) {
    this.uuid = player.uuid.toString();
    this.player = player;

    this.updateInventoryLoss = function(playerData: IPlayerData) {
        this.player.inventory.allItems.forEach((item) => {
            if (item.isBlock()) {
                playerData.blocksLost += item.count;
            } else {
                playerData.itemsLost += item.count;
            }
        })

        return playerData;
    }

    this.clearInventory = function() {
        this.player.inventory.clearContent();
        this.player.curiosInventory.equippedCurios.clear();
    }
} 

//@ts-ignore
global.Player = Player;