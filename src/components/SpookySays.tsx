import { useEffect, useState } from 'react'
import classnames from 'classnames'

const commonButtonClasses =
  'text-7xl bg-white/25 rounded-lg aspect-square p-4 flex-1 basis-1/3'

const getRandomButtonOrder = (num: number) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    arr.push(
      spookyButtonsList[Math.floor(Math.random() * spookyButtonsList.length)]
    )
  }
  return arr
}

const SpookySays = () => {
  /**
   * `currentRound` statuses --
   * -1: Game ended
   * 0: Game not started
   * >1: Game started, current round
   */
  const [currentRound, setCurrentRound] = useState(4)
  const [spookyList, setSpookyList] = useState(getRandomButtonOrder(10))
  const [answer, setAnswer] = useState<SpookyButton[]>([])
  const [currentFeedback, setCurrentFeedback] = useState<SpookyButton | null>(
    null
  )
  const [isShowingAnswer, setIsShowingAnswer] = useState(false)
  const startAnswerPlayback = () => {
    setIsShowingAnswer(true)
  }

  const startGame = () => {
    setCurrentRound(1)
  }

  useEffect(() => {
    if (currentRound >= 1) {
      spookyTurn()
    }
  }, [currentRound])

  // if there is ever a currentFeedback, it will be closed after FEEDBACK_TIMEOUT
  const FEEDBACK_TIMEOUT = 750
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (currentFeedback) {
      timer = setTimeout(() => {
        setCurrentFeedback(null)
      }, FEEDBACK_TIMEOUT)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [currentFeedback])

  useEffect(() => {
    if (isShowingAnswer) {
      for (let i = 0; i < answer.length; i++) {
        setTimeout(() => {
          setCurrentFeedback(() => {
            return answer[i]
          })
          if (i === answer.length - 1) {
            setIsShowingAnswer(false)
          }
        }, 1000 * i)
      }
    }
  }, [answer])

  const spookyTurn = () => {
    setAnswer(spookyList.slice(0, currentRound))
    startAnswerPlayback()
  }

  const onButtonClick = (button: SpookyButton) => {
    if (!currentFeedback && !isShowingAnswer) {
      setCurrentFeedback(() => {
        return button
      })

      if (button.id === answer[0].id) {
        setAnswer((prev) => {
          const newAnswers = prev.slice(1)
          if (newAnswers.length === 0) {
            setCurrentRound((prev) => prev + 1)
          }
          return newAnswers
        })
      }
    }
  }

  return (
    <main className='text-orange-500 flex-1 flex flex-col items-center justify-center max-h-fit'>
      {currentRound <= 0 && (
        <button
          onClick={startGame}
          className='top-5 text-4xl text-shadow-outline underline underline-offset-4'>
          Start Game
        </button>
      )}
      {currentRound > 0 && <></>}
      <div className='flex flex-wrap h-fit gap-5'>
        {spookyButtonsList.map((b) => (
          <button
            onClick={() => {
              onButtonClick(b)
            }}
            className={classnames(commonButtonClasses, b.customClass, {
              'bg-orange-600/50': currentFeedback?.id === b.id,
            })}
            key={b.id}>
            {b.icon}
          </button>
        ))}
      </div>
    </main>
  )
}

export default SpookySays

interface SpookyButton {
  id: SpookyButtonId
  icon: string
  customClass: string
}

enum SpookyButtonId {
  GHOST = 'ghost',
  PUMPKIN = 'pumpkin',
  SKULL = 'skull',
  BAT = 'bat',
  SPIDER = 'spider',
  ALIEN = 'alien',
  MONSTER = 'monster',
}

const spookyButtonsList: SpookyButton[] = [
  { customClass: '', icon: '👻', id: SpookyButtonId.GHOST },
  { customClass: '', icon: '🎃', id: SpookyButtonId.PUMPKIN },
  // {customClass: '', icon: '🕷', id: SpookyButtonId.SPIDER},
  // {customClass: '', icon: '👽', id: SpookyButtonId.ALIEN},
  // {customClass: '', icon: '👹', id: SpookyButtonId.MONSTER},
  { customClass: '', icon: '🦇', id: SpookyButtonId.BAT },
  { customClass: '', icon: '💀', id: SpookyButtonId.SKULL },
]

const spookyButtonsMap = new Map<string, SpookyButton>(
  spookyButtonsList.map((sb) => [sb.id, sb])
)
