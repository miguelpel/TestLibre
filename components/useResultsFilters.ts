export type Score = {
    date: number,
    goodAnswers: number,
}

export type ScoreArr = Score[];

export const getBestScore = (scoreArr: ScoreArr): number => {
    let bestScore: number = 0
    scoreArr.forEach((score: Score) => {
        if (score.goodAnswers > bestScore) {
            bestScore = score.goodAnswers;
        }
    })
    return bestScore;
} 

export const getLastScore = (scoreArr: ScoreArr): number  => {
    let lastScore: Score | undefined;
    scoreArr.forEach((score: Score) => {
        if (!lastScore) lastScore = score;
        if (score.date > lastScore.date) lastScore = score;
    });
    if (lastScore != undefined) return lastScore.goodAnswers;
    return 0;
}

export const getMediumScore = (scoreArr: ScoreArr): number => {
    let addedScores: number = 0;
    scoreArr.forEach((score: Score) => {
        addedScores += score.goodAnswers;
    })
    const mediumScore = Math.round(addedScores / scoreArr.length);
    if (Number.isNaN(mediumScore)) return 0;
    return mediumScore;
}

export const getLastThreeScores = (scoreArr: ScoreArr): ScoreArr => {
    return scoreArr.slice(scoreArr.length - 3)

} 