import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

// Write your code here
/*
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    isHead: true,
    heads: 0,
    tails: 0,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({
        isHead: true,
        total: prev.total + 1,
        heads: prev.heads + 1,
      }))
    } else {
      this.setState(prev => ({
        isHead: false,
        total: prev.total + 1,
        tails: prev.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, total, heads, tails} = this.state

    return (
      <div>
        <div>
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {isHead ? (
            <img
              alt="toss result"
              className="head-img img"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          ) : (
            <img
              alt="toss result"
              className="tail-img img"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}
          <button type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div>
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
*/
