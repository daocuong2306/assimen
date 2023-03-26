import { useState } from "react";
import Square from "./square";
const Board = () => {
    //tạo state cho mỗi ô
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    //tạo state phân biệt x / o
    const [player, setPlayer] = useState(true)
    //tạo state back
    const [back, setBack] = useState()
    //tạo state lịch sử
    const [his, setHis] = useState([true, true])
    //tao state color 
    const [color, setColor] = useState(["while", "while", "while", "while", "while", "while", "while", "while", "while"])
    //tạo state time 
    const [time , setTime] = useState(3)


    const handlePlay = (position) => {
        const newGame = game.map((i, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return i
        })
        setGame(newGame)
        setPlayer(!player)
        setBack(position)
    }

    const back1 = () => {
        if (player == true) {
            game[back] = null
            setPlayer(false)
            setHis(false)
        } else {
            game[back] = null
            setPlayer(true)
            setHis(false)
        }
    }
    const winList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    //check lại hàm checkWinner
    const checkWinner = () => {
        for (let i = 0; i < winList.length; i++) {
            const [p1, p2, p3] = winList[i]
            if (game[p1] === game[p2] && game[p2] === game[p3] && game[p3] === game[p1]) {
                // let checkColor = color.map((i, index) => {
                //     if (index === p1) {
                //         return "red"
                //     }
                //     if (index === p2) {
                //         return "red"
                //     }
                //     if (index === p3) {
                //         return "red"
                //     }
                //     return "while"
                // }
                // )
                // setColor(checkColor)
                return game[p1]
            }
        }
        return null
    }

    const resetGame = () =>{
        setGame([null, null, null, null, null, null, null, null, null])
    }

    const startGame = () =>{
        let times = time
        setInterval(function(){

            times--;
           setTime(times)
           if(times == 0) {
            times =3
            setTime(times)
            let random =Math.floor(Math.random() * 10)
            if (player == true) { 
                handlePlay(random)
            } else {
                handlePlay(random)
            }
           }
        }, 1000);
    }

    return <>
        <h2>Winner is: {checkWinner()}</h2>
        <h3>time game : {time}</h3>
        <button onClick={startGame}>Bắt đầu</button>
        <div className="grid grid-cols-3 gap-3">
            <Square value={game[0]} position={0} handlePlay={handlePlay} color1={color[0]} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} color1={color[1]} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} color1={color[2]} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} color1={color[3]} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} color1={color[4]} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} color1={color[5]} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} color1={color[6]} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} color1={color[7]} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} color1={color[8]} />
            <button onClick={back1}>Quay lại</button>
            <button onClick={resetGame}>Chơi lại</button>
        </div>
    </>



}

export default Board