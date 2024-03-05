/*
	名字:	毒霧森林
	地圖:	毒霧森林
	描述:	930000000
*/

function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 930000000: //毒霧森林
		ms.getPlayer().getMap().startMapEffect("Through the entrance, you will enter a dangerous area, so please be prepared", 5120023);
		break;
	case 930000100: //初入森林
		ms.getPlayer().getMap().startMapEffect("The poisoned ancient wood demon has taken over this area, and we must destroy all these contaminated monsters to move forward.", 5120023);
		break;
	case 930000200: //變質的森林
		ms.getPlayer().getMap().startMapEffect("A large thorn vine blocks the way ahead. In order to remove this obstacle, dilute venom must be found to stop the overgrown ridge vine.", 5120023);
		break;
	case 930000300: //濃霧森林
		ms.getPlayer().getMap().startMapEffect("We must pass through this forest shrouded in thick fog before we can go deeper.", 5120023);
		break;
	case 930000400: //中毒的森林
		ms.getPlayer().getMap().startMapEffect("The poisoned elves nearby are not ordinary monsters. They grow very fast. We need to purify these poisoned elves.", 5120023);
		break;
	case 930000500: //森林空地
		ms.getPlayer().getMap().startMapEffect("Please talk to the elf, it seems to have a way to find the source of the polluted forest", 5120023);
		break;
	case 930000600: //劇毒森林
		ms.getPlayer().getMap().startMapEffect("The root of the problem in Ellin Forest is here. Put the magic stone you obtained on the altar, summon the monster, and destroy it.", 5120023);
		break;
	default:
		}
		ms.dispose();
}