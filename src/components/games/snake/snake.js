import React, {Component} from 'react';
import Back from "../../back";
import './snake.css'
import SnakeHeader from "./snake-header";
import Food from "./food";

const getRandomCoordinates = () => {
    let min = 1;
    let max = 95;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 5) * 5;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 5) * 5;
    return [x, y]
}

const initialState = {
    food: getRandomCoordinates(),
    speed: 200,
    direction: 'RIGHT',
    snakeDots: [
        [0, 0],
        [5, 0]
    ]
}

class Snake extends Component {
    state = initialState;





    componentDidMount() {
            setInterval(this.moveSnake, this.state.speed);
            document.onkeydown = this.onKeyDown;

    }

    componentDidUpdate() {
        this.chekItOutOfBorders();
        this.chekIfCollapsed();
        this.chekIfEat();
    }

    onKeyDown = (e) => {
        e = e || window.event;
        // eslint-disable-next-line
        switch (e.keyCode) {
            case 38:
                this.setState({direction: 'UP'})
                break;
            case 40:
                this.setState({direction: 'DOWN'})
                break;
            case 37:
                this.setState({direction: 'LEFT'})
                break;
            case 39:
                this.setState({direction: 'RIGHT'})
                break;
        }
    }

    moveSnake = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        // eslint-disable-next-line
        switch (this.state.direction) {
            case 'RIGHT':
                head = [head[0] + 5, head[1]];
                break;
            case 'LEFT':
                head = [head[0] - 5, head[1]];
                break;
            case 'DOWN':
                head = [head[0], head[1] + 5];
                break;
            case 'UP':
                head = [head[0], head[1] - 5];
                break;
        }

        dots.push(head);
        dots.shift();
        this.setState({
            snakeDots: dots
        })
    }

    chekIfCollapsed() {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                this.onGameOver();
            }
        })
    }

    chekItOutOfBorders() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            this.onGameOver();
        }
    }

    chekIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;
        if (head[0] === food[0] && head[1] === food[1]) {
            this.setState({
                food: getRandomCoordinates()
            })
            this.enlargeSnake();
            this.increaseSpeed();
        }
    }

    enlargeSnake() {
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([])
        this.setState({
            snakeDots: newSnake
        })
    }

    increaseSpeed() {
        if (this.state.speed > 10) {
            this.setState({
                speed: this.state.speed - 10
            })
        }
    }



    onGameOver() {
        alert(`GAME OVER. Your score: ${this.state.snakeDots.length - 2}`)
        this.setState(initialState)

    }


    up(e) {
        e = e || window.event;
        this.setState(({direction}) => ({direction: 'UP'}))
    }
    down(e) {
        e = e || window.event;
        this.setState(({direction}) => ({direction: 'DOWN'}))
    }
    left(e) {
        e = e || window.event;
        this.setState(({direction}) => ({direction: 'LEFT'}))
    }
    right(e) {
        e = e || window.event;
        this.setState(({direction}) => ({direction: 'RIGHT'}))
    }


    render() {
        const back = '/games';
        const score = this.state.snakeDots.length - 2;


        return (
            <div className='snake_container'>
                <Back back={back}/>
                <div className="score">Score: {score}</div>
                <div className="snake_area">
                    <SnakeHeader snakeDots={this.state.snakeDots}/>
                    <Food dot={this.state.food}/>
                </div>
                <div className="buttons">
                    <div className="arrow_left" id='left' onTouchStart={() => this.left()}><i className="fas fa-arrow-left"></i></div>
                    <div className="arrow_up" id='up' onTouchStart={() => this.up()}><i className="fas fa-arrow-up"></i></div>
                    <div className="arrow_right" id='right' onTouchStart={() => this.right()}><i className="fas fa-arrow-right"></i></div>
                    <div className="arrow_down" id='down' onTouchStart={() => this.down()}><i className="fas fa-arrow-down"></i></div>
                </div>
            </div>
        )
    }
}

export default Snake;