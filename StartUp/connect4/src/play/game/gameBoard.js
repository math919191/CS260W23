import './gameBoard.css'
import {Row} from './row'
import {Dot} from './dot'
import { Column } from './Column';
import {React, Component} from 'react';


class GameBoard extends Component {

    
    renderColumn(i){
        // debugger
        return (
            <Column 
                key={"column"+i}
                column={this.props.columns[i]}
                onClick={() => this.props.onClick(i)}

            />
        )
    }

    renderColumns(){
        let columns = [];
        for (let i = 0; i < 7; i++) {
          columns.push(this.renderColumn(i));
        }
        return columns;

    }

    render(){
        return (
            <div className='gameBoard'>
                {this.renderColumns()}
            </div>
        )    
    }
}


export {GameBoard};
