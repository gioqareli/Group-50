const student = {
    fullName: "ნიკა ნიკოლაძე",
    scores: [85, 92, 78, 88, 95],
  

    averageScore() {
      let sum = 0;
      for (let i = 0; i < this.scores.length; i++) {
        sum += this.scores[i];
      }
      return sum / this.scores.length;
}