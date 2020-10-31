import React, { useState } from 'react'
import './css/storyTime.css'

const initialStoryValues = [
    ['Adjective', ''],
    ['Adjective', ''],
    ['Number', ''],
    ['A Spooky Character', ''],
    ['Emotion', ''],
    ['Action Verb', ''],
    ['Noise', ''],
    ['Same Noise', ''],
    ['Action Verb, Past Tense', ''],
    ['Different Noise', ''],
    ['Adjective', ''],
    ['Adjective', ''],
    ['Verb, Past Tense', ''],
    ['Same Spooky Character', ''],
    ['Item of Furniture', ''],
    ['Same Item', ''],
    ['Candy Name', ''],
    ['Candy Name', ''],
    ['Creature', ''],
    ['Action Verb, Past Tense', ''],
    ['Sound', ''],
    ['Food Verb', ''],
    ['Meal', ''],
]

const StoryTime = () => {
    const [storyValues, setStoryValues] = useState(initialStoryValues)
    const onChangeHandler = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setStoryValues(storyValues.map((row, i) => index === i ? [row[0], e.target.value] : row))
    }
    const wordRow = (word: string[], index: number) => {
        return (
            <div className="WordRow">
                <span>{word[0]}:</span>
                <input
                    type='text'
                    value={word[1]}
                    onChange={onChangeHandler(index)}
                />
            </div>
        )
    }
    return (
        <div className='StoryTime'>
            <div className="InputsHere">
                <div>Word List:</div>
                {storyValues.map((word, index: number) => wordRow(word, index))}
            </div>
            <div className="StoryHere">
                <div>Your Story:</div>
            </div>
        </div>
    )
}

export default StoryTime;