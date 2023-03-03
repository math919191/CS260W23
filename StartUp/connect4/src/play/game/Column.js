import { Component } from "react";
import {Dot} from './dot'

class Column extends Component {
    
    renderDot(i){
        return (
            <Dot 
                key={"dot" + i}
                //5-i allows the bottom left to be 0,0 (6 items, 0 based indexing)
                color={this.props.column[5-i]}
                
            />

        )
    }

    renderColumn() {
        let column = [];
        for (let i = 0; i < 6; i++) {
          column.push(this.renderDot(i));
        }
        return column;
    }
    
    render(){
        return (
            <div className="column" onClick={this.props.onClick}>
                <div className="dot invisibleDot"></div>
                {this.renderColumn()}
            </div>
        )
    }
}

export {Column};