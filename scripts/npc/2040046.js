/*
	名字:	哈利
	地圖:	玩具城
	描述:	220000000
*/

var cost = 100000;

function start() {
	cm.sendYesNo("Hello! Do you want to expand your friend list? Just spend 100000 maple coins and I will add #b 2 #k slots to your friend list. The price is not expensive! ");
                  }

                  function action(mode, type, selection) {
                  switch (mode) {
                  case 0:
                  cm.sendOk("I understand, you don't have as many friends as I thought.");
                  break;
                  case 1:
                  var capacity = cm.getPlayer().getBuddylist().getCapacity();
                  if (capacity < 50) {
                  if (cm.getPlayer().getMeso() > cost) {
                  cm.gainMeso(-cost);
                  cm.getPlayer().setBuddyCapacity(capacity + 2);
                  cm.sendOk("The friend list slot has been added successfully! It only applies to one character at a time, so it will not affect any other characters on your account.");
                  cm.dispose();
                  return;
                  }
                  cm.sendOk("Sorry, please make sure you have #b" + cost + "#k maple coins?");
                  cm.dispose();
                  return;
                  }
                  cm.sendOk("Expansion failed. Your friend list has exceeded the maximum limit of #b50#k slots.");
			}
			cm.dispose();
}