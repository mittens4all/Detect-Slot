import { world } from "@minecraft/server";

const objSlot = world.scoreboard.getObjective("detect:slot") ?? world.scoreboard.addObjective("detect:slot");

world.afterEvents.playerSpawn.subscribe((event) => {
    if (!event.initialSpawn) return;
    const player = event.player;
    if (!objSlot.hasParticipant(player)) objSlot.setScore(player, 1);
});

world.afterEvents.playerHotbarSelectedSlotChange.subscribe(({ player, newSlotSelected }) => {
    objSlot.setScore(player, newSlotSelected + 1);
});
