var status = -1;

function start(mode, type, selection) {
        qm.dispose();
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

    if (status == 0) {
	    qm.sendYesNo("Welcome to the Bowman Instructional School. Only those who are invited will ever find it. Try not to get lost on the way out. So, are you ready to become a Archer?");
	} else if (status == 1) {
	    qm.sendNext("With this, you have become a Archer. Since you can use Archer skills now, open your Skill windows and have a look. As you level up, you will be able to learn more skills.");
	} else if (status == 2) {
		qm.sendNextPrev("But skills aren't enough, right? A true Archer must have the stats to match! A Archer uses DEX as the main stat and STR as the secondary stat. If you don't know how to raise stats, just use #bAuto-Assign#k.");
	} else if (status == 3) {
	   	qm.sendNextPrev("Oh, I gave you a little gift, too. I expanded a few slots in your Equip and ETC item tabs. Bigger inventory, better life, I always say.");
	} else if (status == 4) {
	    qm.sendNextPrev("Now a word of warning. Everyone loses some of their earned EXP when they fall in battle. Be careful. You don't want to lost anything you worked to get, eh?");
	} else if (status == 5) {
	    qm.sendNextPrev("Right, that's it. Take the equipment I gave you, and use it to train your skills as a Archer.");
	} else if (status == 6) {
	    qm.resetStats(4, 25, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(300);
	    qm.gainItem(1452051,1);
	    qm.gainItem(1462092,1);
	    qm.gainItem(2060000, 2000);
		qm.gainItem(2061000, 2000);
		qm.forceCompleteQuest();
		qm.dispose();
	    }
	}
}