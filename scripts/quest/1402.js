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
	    qm.sendYesNo("Grendel the Really Old, the Magician Job Instructor in Ellinia, wishes to talk to you about becoming a Magician.");
	} else if (status == 1) {
	    qm.sendNext("In order to become a Magician, talk to Grendel the Really Old in Ellinia.");
	} else if (status == 2) {
		qm.sendNextPrev("But skills aren't enough, right? A true Thief must have the stats to match! A Magician uses INT as the main stat and LUK as the secondary stat. If you don't know how to raise stats, just use #bAuto-Assign#k.");
	} else if (status == 3) {
	   	qm.sendNextPrev("Oh, I gave you a little gift, too. I expanded a few slots in your Equip and ETC item tabs. Bigger inventory, better life, I always say.");
	} else if (status == 4) {
	    qm.sendNextPrev("Now a word of warning. Everyone loses some of their earned EXP when they fall in battle. Be careful. You don't want to lost anything you worked to get, eh?");
	} else if (status == 5) {
	    qm.sendNextPrev("You have become a Magician!");
	} else if (status == 6) {
	    qm.resetStats(4, 4, 25, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(200);
	    qm.gainItem(1372043,1);
		qm.forceCompleteQuest();
		qm.dispose();
	    }
	}
}