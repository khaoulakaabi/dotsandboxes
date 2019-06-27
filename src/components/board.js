import React from 'react'
import PropTypes from 'prop-types'
import Box from '../components/box'
import { BOX_SIZE } from '../constants'

import '../styles/board.scss'

const Board = ({ board, makeMove, width }) => (
  <div
    className="board"
    style={{
      width: String(width * BOX_SIZE) + 'px'
    }}
  >
  {
    board.map(({ edges, outer, location, taken }, i) => (
      <Box
        key={i}
        makeMove={makeMove}
        edges={edges}
        outer={outer}
        taken={taken}
      />
    ))
  }  </div>
)

Board.propTypes = {
 
  width: PropTypes.number.isRequired,
  board: PropTypes.array.isRequired,

}

export default Board