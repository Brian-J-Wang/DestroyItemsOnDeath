const UUID = Java.loadClass("java.util.UUID");

ServerEvents.loaded((event) => {
    let data = event.server.persistentData;

    if (!data.worldUUID) {
        data.worldUUID = UUID.randomUUID().toString();
    }
})