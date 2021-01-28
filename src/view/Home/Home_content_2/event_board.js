import React from 'react'
import {Row, Col} from 'antd'
import Home_content_2_2 from "./Home_content_2_2";
import {inject, observer} from "mobx-react";

import './event_board.less'

@inject('appStore') @observer
class Event_board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"事件感知:",
            litTitle:"当天记录:",
            content:[]
        }
    }

    componentDidMount() {
        let {title, litTitle, content} = this.props || {
            title:"事件感知:",
            litTitle:"当天记录:",
            content:[]
        }

        this.setState({
            title,
            litTitle,
            content
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {

        let {title, litTitle, content} = nextProps || {
            title:"事件感知:",
            litTitle:"当天记录:",
            content:[]
        }

        this.setState({
            title,
            litTitle,
            content
        })

    }

    componentWillUnmount() {

    }

    render() {

        let content_component = this.state.content.map((val, index)=>{
            return (
                <Row gutter={16} >
                    <Col span={12} style={{color:"white", fontSize:10}}>
                        {val.timestamp}
                    </Col>
                    <Col span={12} style={{color:"white", fontSize:10}}>
                        {val.content}
                    </Col>
                </Row>
            )
        })

        return (
            <div
                className={'event_board'}
                style={{...{display:'flex', width:'100%', height: '100%', flexDirection:'column', padding:'10px 10px'},
                ...this.props.style}}>
                <span style={{color:"white", fontSize:18}}>
                    {this.state.title}
                </span>
                <span style={{color:"white", fontSize:14}}>
                    {this.state.litTitle}
                </span>
                <div style={{display:'flex', width:'100%', height: '80%', flexDirection:'column',
                    overflowY:'scroll',
                    marginTop:20
                }}>
                    {content_component}
                </div>
            </div>
        )
    }
}

export default Event_board;