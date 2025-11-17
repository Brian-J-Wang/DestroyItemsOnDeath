EntityEvents.death(event => {
    if (!event.entity.isPlayer()) {
        return;
    };

    const player = (event.entity as Internal.Player);

    player.inventory.allItems().remove();
})