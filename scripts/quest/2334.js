
var status = -1;

function start(mode, type, selection) {
	switch (mode) {
	case -1:
		qm.dispose();
		return;
	case 0:
		status--;
		break;
	case 1:
		status++;
		break;
		}
	switch (status) {
	case 0:
		qm.sendNext("Thank you so much, you are the hero who saved the Mushroom Kingdom and I appreciate everything you have done. I don't know how to thank you, please understand why I can't let you see my face.");
		break;
	case 1:
		qm.sendNextPrev("It's embarrassing to say this, but my family has covered my face since I was a child, in fear of men falling hopelessly in love with me. I have become so used to it that I even avoid women. I know it's rude to turn your back on a hero, but it takes me some time to work up the courage to greet you face to face.");
		break;
	case 2:
		qm.sendNextPrevS("I get it...#b(Wow, how pretty is she?)");
		break;
	case 3:
		qm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(1));
		qm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2000));
		break;
	case 4:
		qm.spawnNPCRequestController(1300002, 72, 80, 0);
		qm.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.setNPCSpecialAction(1300002, "face"));
		qm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 8000));
		break;
	case 5:
		qm.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.removeNPCController(1300002));
		qm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(0));
		qm.sendNext("#b(What the--)");
		break;
	case 6:
		qm.sendNextPrevS("In the world of mushrooms, is this something considered #bbeautiful?");
		break;
	case 7:
		qm.sendPrev("I was so shy that I blushed. Anyway, thank you.");
		break;
	case 8:
		Packages.server.quest.MapleQuest.getInstance(2334).forceStart(qm.getPlayer(), qm.getNpc(), null);
		qm.dispose();
}
}