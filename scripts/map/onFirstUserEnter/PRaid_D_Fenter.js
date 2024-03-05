/*
	名字:	雾海大作战
	地圖:	触礁的幽灵船
	描述:	923020000
*/

function start() {
	switch (ms.getPlayer().getMap().getId() % 10) {
	case 0: //第1作戰室
		ms.getPlayer().getMap().startMapEffect("Destroy all Marine Private Ghosts", 5120033);
		break;
	case 1: //第2作戰室
		ms.getPlayer().getMap().startMapEffect("Kill the ghost of Marine Corpsman hiding in the box", 5120033);
		break;
	case 2: //第3作戰室
		ms.getPlayer().getMap().startMapEffect("Please be careful, First Class Navigators are very powerful.", 5120033);
		break;
	case 3: //第4作戰室
		ms.getPlayer().getMap().startMapEffect("There are also a lot of ghost crews in this area, they need to be eliminated as soon as possible", 5120033);
		break;
	case 4: //第5作戰室
		ms.getPlayer().getMap().startMapEffect("Kill all the ghost crew members and connect the two joysticks to enter the captain's cabin", 5120033);
		break;
	default:
		}
		ms.dispose();
}