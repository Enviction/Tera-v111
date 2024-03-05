/*
	名字:	隱藏地圖
	地圖:	羅密歐
	描述:	926100000
*/

function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 926100000: //可疑的研究室
		ms.getPlayer().getMap().startMapEffect("我們要找到進入實驗室的入口，圖書館裏到處亂堆放的書，也許會有什麼發現也說不定", 5120021);
		break;
	case 926100001: //實驗室通道
		ms.getPlayer().getMap().startMapEffect("聚集在這裡的怪物，阻擋了我們前進的道路，讓我們先消滅掉這些怪物，然後繼續前進", 5120021);
		break;
	case 926100100: //令人不適的實驗室
		ms.getPlayer().getMap().startMapEffect("在這個房間裏，我們必須修復好那些燒杯的漏洞，才能開啟進入下一區域的通道", 5120021);
		break;
	case 926100200: //特殊實驗室
		ms.getPlayer().getMap().startMapEffect("我們必須在房間附近搜尋，找到卡帕萊特和蒙特鳩的實驗資料", 5120021);
		break;
	case 926100203: //猶利塔的辦公室
		ms.getPlayer().getMap().startMapEffect("這裡是猶利塔的辦公室，請一定要小心", 5120021);
		break;
	case 926100300: //研究室走廊
		ms.getPlayer().getMap().startMapEffect("我有聽見愛人的聲音，就在實驗室的上方，我們所有人必須要到達實驗室的頂端", 5120021);
		break;
	case 926100400: //中央研究室入口
		ms.getPlayer().getMap().startMapEffect("請快一些，希望時間還來得及，我們要快去救救我的愛人，茱麗葉就在前面的那個房間裏", 5120021);
		break;
	case 926100401: //中央研究室
		ms.getPlayer().getMap().startMapEffect("快去保護茱麗葉，她好像受傷了，請一定要拯救我的愛人", 5120021);
		break;
	default:
		}
		ms.dispose();
}