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
		qm.sendNext("Where are you? You definitely took the boat that goes to Maple Island... But then Balrog showed up... You don't remember anything after that. And what's the deal with this monkey? Talk to him.");
		break;
	case 1:
		qm.sendNext("The monkey is gesturing wildly with his hands and feet. You think he's saying that... He saved you from the ocean? This monkey saved your life?!");
		break;
	case 2:
        qm.sendOk("You thanked the monkey. Still, on your quest to be a great and powerful Explorer...you were saved by a monkey. Not a very good start, is it?");
        break;
    case 3:
        qm.dispose();
        qm.gainExp(5);
        qm.forceCompleteQuest();

}
}
