import React from 'react';
import styles from './RadioButton.module.css';
import {DoneQuestions} from "../../../types.ts";


type Props = {
    name: string;
    type: string;
    checked?: boolean;
    className?: string;
    value: string | number;
    onChange: () => void;
    currentId:number,
    doneQuestion:DoneQuestions
};
export const RadioButton = ({
                                     value,
                                     name,
                                     onChange,
                                     type,
                                     checked,
                                     currentId,
                                    doneQuestion
                                 }: Props) => {
    const id = React.useId()

    return (
        <div className={`${styles.row_radio_wrapper} ${doneQuestion.find(el => el.id === currentId) ? styles.done_question : ''}`}>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                className={styles.row_radio_input}
            />
            <label
                className={`${styles.row_radio_label} ${checked ? styles.checked : ''}`}
                htmlFor={id}
            >
            </label>
        </div>
    );
};
