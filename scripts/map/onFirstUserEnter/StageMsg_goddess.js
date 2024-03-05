/*
	名字:	隱密之地
	地圖:	雅典娜禁地&amp;lt;中央塔&gt;
	描述:	920010100
*/

function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 920010100: //中央塔
		ms.getPlayer().getMap().startMapEffect("Please save me by collecting Cloud Pieces!", 5120019);
		break;
	case 920010200: //散步路
		ms.getPlayer().getMap().startMapEffect("Bring all the pieces here to save Minerva!", 5120019);
		break;
	case 920010300: //倉庫
		ms.getPlayer().getMap().startMapEffect("Destroy the monsters and gather Statue Pieces!", 5120019);
		break;
	case 920010400: //休息室
		ms.getPlayer().getMap().startMapEffect("Destroy the monsters in each room and gather Statue Pieces!", 5120019);
		break;
	case 920010700: //向上通道
		ms.getPlayer().getMap().startMapEffect("Get the right combination once you get to the top!", 5120019);
		break;
	case 920010800: //庭園
		ms.getPlayer().getMap().startMapEffect("Summon and defeat Papa Pixie!", 5120019);
		break;
	default:
		}
		ms.dispose();
}