type Answer = {
    correct?: boolean,
    label: string,
}

export type QuestionType = {
    answers: Answer[],
    assetUrl: string,
    categorySlug: string,
    correction: string,
    correctionAudioUrl: string,
    mediaType: string,
    question?: string,
    questionPart1?: string,
    questionPart2?: string,
    questionAudioUrl: string,
    type: string, // sigleChoice, singleChoice2, multiChoice
    uuid: string,
}
