import React, { useState, useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import {
  Button, Icon, Image,
} from 'semantic-ui-react';
import ChatInWaitingRoom from '../../components/chatBox/InWaitingRoom/chatInWaitingRoom';
import styles from './playRoomPage.module.css';

// eslint-disable-next-line react/prop-types
const PlayRoomPage = ({ players }) => {
  const style = {
    border: '0.0625rem solid #9c9c9c',
    borderRadius: '0.25rem',
    maxWidth: '60rem',
    maxHeight: '30rem',
  };
    // eslint-disable-next-line no-unused-vars
  const [backgroundColor, setBackgoundColor] = useState('white');
  // eslint-disable-next-line no-unused-vars
  const [penColor, setPenColor] = useState('red');
  const canvas = useRef();
  const handleUndo = () => canvas.current.undo();
  const handleRedo = () => canvas.current.redo();
  const handleClear = () => canvas.current.clearCanvas();
  const handleErase = () => canvas.current.eraseMode(true);
  const handleDrawing = () => canvas.current.eraseMode(false);
  const handleChangeBackground = (event) => {
    console.log(event);
    const currentColor = penColor;
    setBackgoundColor(currentColor);
  };

  return (
    <>
      <ul className={`${styles.player_list} ${styles.player_background}`}>
        {
          // eslint-disable-next-line react/prop-types
          players.map((player) => (
            <li className={styles.player}>
              <div className={styles.player_rank}>#1</div>
              <div className={styles.player_nickname}>
                <span className={styles.player_title}>{player.nickName}</span>
                <span>Points : 0</span>
              </div>
              <div className={styles.player_character}>
                <Image src={player.img} size="mini" />
              </div>
            </li>
          ))
        }
      </ul>
      <section className={styles.canvas}>
        <ReactSketchCanvas
          ref={canvas}
          style={style}
          strokeWidth={8}
          width="40rem"
          height="30rem"
          strokeColor={penColor}
          eraserWidth={10}
          onWheel={(event) => console.log(event)}
          canvasColor={backgroundColor}
        />
        <Button type="button" onClick={handleUndo} onWheel={(event) => console.log(event)}>
          <Icon name="undo" size="large" />
        </Button>
        <Button type="button" onClick={handleRedo}>
          <Icon name="redo" size="large" />
        </Button>
        <Button type="button" onClick={handleClear}>
          <Icon name="trash alternate" size="large" />
        </Button>
        <Button type="button" onClick={handleErase}>
          <Icon name="eraser" size="large" />
        </Button>
        <Button type="button" onClick={handleDrawing}>
          <Icon name="pencil" size="large" />
        </Button>
        <Button type="button" onClick={handleChangeBackground}>
          <Icon name="tint" size="large" />
        </Button>
      </section>

      <div className={styles.chat}>
        <ChatInWaitingRoom />
      </div>
    </>
  );
};

export default PlayRoomPage;
