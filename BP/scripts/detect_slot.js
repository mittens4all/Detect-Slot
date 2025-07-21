import { world, system } from "@minecraft/server";

const objSlot = world.scoreboard.getObjective("detect:slot") ?? world.scoreboard.addObjective("detect:slot");

system.runInterval(() => {
    const players = world.getPlayers();
    for (const player of players) {
        const slot = player.selectedSlotIndex;
        objSlot.setScore(player, slot + 1);
    }
}, 1);
