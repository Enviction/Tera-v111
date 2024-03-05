var status = -1;

function start(mode, type, selection) {
	switch (mode) {
	case -1:
		qm.dispose();
		return;
	case 0:
		if (status > 0) {
		qm.dispose();
		return;
		}
		status--;
		break;
	case 1:
		status++;
		break;
		}
	switch (status) {
	case 0:
		qm.sendNext("The monkey is rummaging around for something. Looks like he has something to say, too. What does he want?");
		break;
	case 1:
		qm.sendNext("The monkey has an apple! Say, is this monkey trying to give you an apple? What a kind monkey! Eat the apple, and then thank the monkey.");
		break;
	case 2:
        qm.sendOk("This monkey seems quite fond of you.");
        break;
    case 3:
        qm.dispose();
        qm.gainExp(48);
        qm.forceCompleteQuest();

}
}
