var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	switch (mode) {
	case -1:
		cm.dispose();
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
		cm.sendNextS("Commander! Where were you? I thought maybe Arkarium had actually made a move against you...", 1);
		break;
	case 1:
		cm.sendNextS("Things are strange these days. Arkarium has it for you, since you were the one who managed to catch the Goddess of the Temple of Time. He only managed to blind her, but he still thinks he deserves all the credit...Fool.", 1);
		break;
	case 2:
		cm.sendNextS("...Are you okay? You seem different... Yeah, you are. You used to scold me when I asked you such things, but now... Hey, you don't look so good. Did something happen? Are you hurt?", 1);
		break;
	case 3:
		cm.sendNextS("...Tell me, Mastema, Who do you serve? Is it me, or the Black Mage?", 3);
		break;
	case 4:
		cm.sendNextS("W-wha?", 1);
		break;
	case 5:
		cm.sendNextS("Answer me!", 3);
		break;
	case 6:
		cm.sendNextS("Well, I'm loyal to the Black Mage, of course. But we pledged our lives for each other. I go where you go.", 1);
		break;
	case 7:
		cm.sendNextS("I have a favor to ask of you then... Give this letter to the #rHeroes#k.", 3);
		break;
	case 8:
		cm.sendNextS("Do what?! Why? What are you thinking? Are you trying to make things worse? You're finished as a Commander once anyone finds out you're trying to communicate with the Heroes!", 1);
		break;
	case 9:
		cm.sendNextS("I am already finished as a Commander.", 3);
		break;
	case 10:
		cm.sendNextS("What? Are you betraying the Black Mage? Why are you doing this?", 1);
		break;
	case 11:
		cm.sendNextS("There's no time to explain. Please do as I say. If not...", 3);
		break;
	case 12:
		cm.sendNextS("No, I'll do it. I'm just worried. What about your family? Wont' they be in dang-", 1);
		break;
	case 13:
		cm.sendNextS("Not another word about my family!", 3);
		break;
	case 14:
		cm.sendNextS("What? Did something happen to them already?", 1);
		break;
	case 15:
		cm.sendNextS("....", 3);
		break;
	case 16:
		cm.sendNextS("I see... You've always been the quiet type, but sometimes silence speaks for itself. Very well. I'll give this letter to the Heroes.", 1);
		break;
	case 17:
		cm.sendNextS("Thank you. Sorry for asking such a task of you.", 3);
		break;
	case 18:
		cm.sendNextS("Don't be sorry. I owe you my life, after all. Alright, I'm going. Good luck.", 1);
		break;
	case 19:
		cm.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.setNPCSpecialAction(2159307, "teleportation"));
		cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1200));
		break;
	case 20:
		cm.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.removeNPCController(2159307));
		cm.sendNextS("...Your loyalty means so much to me. Thank you.", 3);
		break;
	case 21:
		cm.dispose();
		cm.getPlayer().changeMap(cm.getMap(927000080), cm.getMap(927000080).getPortal(0));
}
}