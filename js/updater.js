function Updater(contest) {
  this.contest = contest;
}

Updater.prototype.startRefresh = function() {
  setInterval(function() {
    this.contest.update();
  });
}
