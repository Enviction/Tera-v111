/*
	名字:	隱密之地
	地圖:	第一次同行
	描述:	910340100
*/

function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 910340100: //1號關隘
		ms.getPlayer().getMap().startMapEffect("Solve the question and gather the amount of passes!", 5120017);
		break;
	case 910340200: //2號關隘
		ms.getPlayer().getMap().startMapEffect("Get on the ropes and unveil the correct combination!", 5120017);
		break;
	case 910340300: //3號關隘
		ms.getPlayer().getMap().startMapEffect("Get on the platforms and unveil the correct combination!", 5120017);
		break;
	case 910340400: //4號關隘
		ms.getPlayer().getMap().startMapEffect("Defeat King Slime and his minions!", 5120017);
		break;
	default:
		}
		ms.dispose();
}