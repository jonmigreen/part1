import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <>
      <Display counter={value} text={text}/>
    </>
  )
}

const StatTable = ({total, average, posPercentage}) => {
  return (
    <>
      <Display counter={total} text={'all'}/>
      <Display counter={average} text='average'/>
      <Display counter={posPercentage} text='positive' percent='%'/>
    </>
  )
}


const Statistics = ({good, neutral, bad, total, average, posPercentage}) => {
  if (total > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatTable total={total} average={average} posPercentage={posPercentage}/>
      </div>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}


const Display = ({ counter, text, percent }) => {
  console.log(counter, text)
  return (
    <table>
    <tbody>
    <tr>
      <th width="60px" align="left">{text}</th>
      <td>{counter} {percent}</td>
    </tr>
    </tbody>
    </table>
  )
}

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)
  const total = good + bad + neutral
  const average = (good + (bad * -1)) / total
  const posPercentage = (good / total) * 100


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={increaseGood} text='good'/>
      <Button handleClick={increaseNeutral} text='neutral'/>
      <Button handleClick={increaseBad} text='bad'/>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        posPercentage={posPercentage}
      />
    </div>
  )
}

export default App
