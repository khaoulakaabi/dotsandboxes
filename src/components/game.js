import React from 'react'
import PropTypes from 'prop-types'
import Board from '../components/board'
import Score from '../components/score'
import connectGame from '../connectors/game'

const Game = ({ board, makeMove, width }) => (
  <div className="container">
    <h1 className="title">Dots And Boxes</h1>
    <Board board={board} makeMove={makeMove} width={width}/>
    <Score/>
  </div>
)

  Game.propTypes = {
    board: PropTypes.array.isRequired,
    makeMove: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
  }

  export default connectGame(Game)
