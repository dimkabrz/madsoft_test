import {SetStateAction} from "react";

export type OptionValues = 'single' | 'shortText' | 'longText';

export type Props = {
    currentQuestion: number,
    setCurrentQuestion: (value: SetStateAction<number>) => void;
}

export type SavedData = {
    question?: number,
    answer?: number
}

export type OptionsProps = {
    value: string,
    type: string
}

export type DoneQuestions = {
    id:number,
    answers:number[]
}[]

export type MultipleChecked = {
    id:number,
    answer:string[]
}