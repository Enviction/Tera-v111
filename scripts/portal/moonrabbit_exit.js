function enter(pi) {
	var returnMap = pi.getSavedLocation("FREE_MARKET");
	if (returnMap < 0) {
		returnMap = 100000200; // to fix people who entered the fm trough an unconventional way
	}
	pi.clearSavedLocation("FREE_MARKET");
	pi.warp(100000200, 0);
	return true;
}