EntityEvents.death(event => {
    if (!event.entity.isPlayer()) {
        return;
    }

    //@ts-ignore
    const player = (event.entity as Internal.Player);
    player.inventory.clearContent();
    player.curiosInventory.equippedCurios.clear();      
});