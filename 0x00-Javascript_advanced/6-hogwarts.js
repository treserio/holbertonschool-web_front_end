/* I would have used export default here but browsers don't support it */
class studentHogwarts {
  constructor () {
    this.privateScore = 0;
    this.name = null;
  }

  #changeScoreBy(points) {
    this.privateScore += points;
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    let obj = {}
    obj[this.name] = this.privateScore;
    return obj;
  }
}

harry = new studentHogwarts();
harry.setName('Harry');
for(i = 0; i < 4; ++i) {
  harry.rewardStudent();
}
console.log(harry.getScore());

draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
for(i = 0; i < 3; ++i) {
  draco.penalizeStudent();
}
console.log(draco.getScore());
