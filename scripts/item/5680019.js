/*
	名字:	雪麗髮型券
	地圖:	雪麗髮型券
	描述:	特殊消耗品
*/

function start() {
	var hair = 32150 + (im.getPlayer().getHair() % 10);
	im.gainItem(5680019, -1);
	im.getPlayer().setHair(hair);
	im.getPlayer().updateSingleStat(Packages.client.MapleStat.HAIR, hair);
	im.dispose();
}