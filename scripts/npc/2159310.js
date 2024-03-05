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
		cm.sendNextS("Except for the regiment commander who is out in the field, has everyone arrived... Let's start the meeting.", 1);
        break;
        case 1:
        cm.sendNextS("We cannot relax for a moment until the great black magician completes his plan! I heard that you discovered interesting information, #h0#, tell me.", 5, 2159308);
        break;
        case 2:
        cm.sendNextS("Yes...I discovered that a resistance organization was secretly established and is building a force against us.", 3);
        break;
        case 3:
        cm.sendNextS("The Resistance Army... what can a group of ragtag people do, cough cough cough... I heard people call them #bhero#k? Isn't it funny?", 5, 2159308);
        break;
        case 4:
        cm.sendNextS("I'm still looking forward to it. Seeing them running around in panic makes me excited.", 5, 2159339);
        break;
        case 5:
        cm.sendNextS("#p2159339#? Don't be so arrogant.", 5, 2159308);
        break;
        case 6:
        cm.sendNextS("I'm not done yet.", 5, 2159339);
        break;
        case 7:
        cm.sendNextS("Master Shi Wu seems to be very busy, Killer Whale, are you okay here?", 3);
        break;
        case 8:
        cm.sendNextS("Shi Wu is too serious and always finds useless things to do! But I am also planning to go to Shi Wu's place! Humph! The legion commander is too rigid and boring.", 5, 2159339);
        break;
        case 9:
        cm.sendNextS("...What about the meeting?", 1);
        break;
	case 10:
		cm.sendNextS("Whenever Orchid talks, our meetings grind to a halt! As for the Heroes, I'm sure #h0# has a plan to deal with them. I'm sure these pathetic 'Heroes' will be no match for him.", 5, 2159308);
        break;
        case 11:
        cm.sendNextS("For someone who can defeat even the goddess of time, what's the point of being a hero? Isn't it? Hahahaha...", 5, 2159308);
        break;
        case 12:
        cm.sendNextS("Unlike most enemies, the heroes fight for others rather than themselves. They are special because they want to protect the world. This gang is dangerous. Also, we just caught Goddess, the black magician is the one who defeats her.", 3);
        break;
        case 13:
        cm.sendNextS("You are so humble! You are the most trusted person of the black magician.", 5, 2159308);
        break;
        case 14:
        cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 2000, 0, -100, 1)) ;
        cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1500));
        break;
        case 15:
        cm.sendNextS("...That's enough for you two.", 1);
        break;
        case 16:
        cm.sendNextS("Why? Isn't it interesting? Keep going, #p2159308#.", 5, 2159339);
        break;
        case 17:
        cm.sendNextS("I am just praising the real heroes of our army, hahaha...the strongest #h0#!", 5, 2159308);
        break;
        case 18:
		cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10", 2000, 0, -100, 1));
		cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1500));
		break;
	case 19:
		cm.sendNextS("Since occupying the temple, everything is about to end... In this matter, #h0#'s contribution is the most important to trap the goddess of time.", 1);
        break;
        case 20:
        cm.sendNextS("This topic ends here, let's continue the meeting.", 1);
        break;
        case 21:
        cm.sendNextS("Stop talking about those boring heroes, how about other resistance forces?", 5, 2159308);
        break;
        case 22:
        cm.sendNextS("...According to the order, it has been confirmed that almost all of them have been eliminated.", 1);
        break;
        case 23:
        cm.sendNextS("Oh, that's it.", 5, 2159308);
        break;
        case 24:
        cm.sendNextS("But why does the black magician want us to destroy everything? If there is nothing, there is nothing to control.", 5, 2159339);
        break;
        case 25:
        cm.sendNextS("What? When did the Black Magician order the request? I have never heard of this.", 3);
        break;
        case 26:
        cm.sendNextS("Yes, I almost forgot to tell you, the black magician wants all of us to destroy everything.", 5, 2159308);
        break;
        case 27:
		cm.sendNextS("For example, Lever has just been burned to ashes...", 1);
        break;
        case 28:
        cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/18", 2000, 0, -100, 1)) ;
        cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1500));
        break;
        case 29:
        cm.sendNextS("(Leafre? Very close to my home...)", 3);
        break;
        case 30:
        cm.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction6.img/effect/tuto/balloonMsg1/3"));
        cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1500));
        break;
        case 31:
        cm.sendNextS("We did a good job, we wiped out all the resistance, leaving only a few slaves.", 5, 2159308);
        break;
        case 32:
        cm.sendNextS("Hahahahaha...why are you so sensitive? Is there anything you are worried about?", 5, 2159308);
        break;
        case 33:
        cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/11", 2000, 0, -100, 1)) ;
        cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1500));
        break;
        case 34:
        cm.sendNextS("Excuse me, there is something I have to deal with.", 3);
        break;
	case 35:
		cm.sendNextS("Wait! The meeting hasn't ended yet! Just because you are favored by the black magician doesn't mean you can do whatever you want. Didn't I say you have to do our thing? If you leave now, you will be disobeying orders!", 5, 2159308);
        break;
        case 36:
        cm.sendNextS("#b (Demian, mother... I hope you are okay...)", 3);
        break;
	case 37:
		cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 2));
		cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 38:
		cm.dispose();
		cm.getPlayer().changeMap(cm.getMap(924020010), cm.getMap(924020010).getPortal(0));
}
}