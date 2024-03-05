/*
	名字:	隱藏地圖
	地圖:	危險之海1
	描述:	923040100
*/

function start() {
	switch ((ms.getPlayer().getMap().getId() / 100) % 10) {
	case 1: //危險之海1
		ms.getPlayer().getMap().startMapEffect("Destroy all nearby monsters", 5120052);
		break;
	case 2: //危險之海2
		ms.getPlayer().getMap().startMapEffect("Due to the obstruction of water pressure, it is necessary to carry 10 bubbles into deeper places", 5120052);
		break;
	case 3: //危險之海中央
		ms.getPlayer().getMap().startMapEffect("Come on, I'm here, please protect me within three minutes", 5120052);
		break;
	case 4: //危險的洞窟
		ms.getPlayer().getMap().startMapEffect("Please defeat the Sea Nuss in the cave and restore the originally peaceful ocean", 5120052);
		break;
	default:
		}
		ms.dispose();
}