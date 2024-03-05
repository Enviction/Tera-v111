/*
	名字:	隱藏地圖
	地圖:	前往海盜船之路
	描述:	925100000
*/

function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 925100000: //前往海盜船之路
		ms.getPlayer().getMap().startMapEffect("Defeat the monsters outside of the ship to advance!", 5120020);
		break;
	case 925100100: //突破船首!
		ms.getPlayer().getMap().startMapEffect("We must prove ourselves! Get me Pirate Medals!", 5120020);
		break;
	case 925100200: //
		ms.getPlayer().getMap().startMapEffect("Defeat the guards here to pass!", 5120020);
		break;
	case 925100300: //
		ms.getPlayer().getMap().startMapEffect("Eliminate the guards here to pass!", 5120020);
		break;
	case 925100400: //打倒海賊!
		ms.getPlayer().getMap().startMapEffect("Lock the doors! Seal the root of the Ship's power!", 5120020);
		break;
	case 925100500: //海賊王的最後
		ms.getPlayer().getMap().startMapEffect("Destroy the Lord Pirate!", 5120020);
		break;
	default:
		}
		ms.dispose();
}