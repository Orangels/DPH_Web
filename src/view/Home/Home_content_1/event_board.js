import React from 'react'
import {Row, Col} from 'antd'
import {inject, observer} from "mobx-react";
import {screen_scale_height, screen_scale_width} from "../../parameter/parameters";
import './event_board_home_1.less'

@inject('appStore') @observer
class Event_board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"进店人数:",
            text:"0 人次",
            content:[],
            span:24,
        }
    }

    componentDidMount() {
        let {title, text, content, span} = this.props || {
            title:"进店人数:",
            text:"0 人次",
            content:[],
            span:24
        }

        this.setState({
            title,
            text,
            content,
            span
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {

        let {title, text, content, span} = nextProps || {
            title:"进店人数:",
            text:"0 人次",
            content:[],
            span:24
        }

        this.setState({
            title,
            text,
            content,
            span
        })

    }

    componentWillUnmount() {

    }

    render() {

        let content_component = this.state.content.map((val, index)=>{
            return (
                <Row gutter={16} >
                    <Col span={12} style={{color:"white", fontSize:10}}>
                        {val.title}
                    </Col>
                    <Col span={12} style={{color:"white", fontSize:10}}>
                        {val.content}
                    </Col>
                </Row>
            )
        })

        let span = this.props.span

        return (
            <Col span={span}
                className={'event_board_home_1'}
                style={{...{display:'flex',height: 100*screen_scale_height, flexDirection:'column', padding:'10px 10px'},
                    ...this.props.style}}>
                <span style={{color:"white", fontSize:18}}>
                    {this.state.title}
                </span>
                <span style={{color:"white", fontSize:14}}>
                    {this.state.text}
                </span>
                <div style={{display:'flex', width:'100%', height: '80%', flexDirection:'column',
                    marginTop:20
                }}>
                    {content_component}
                </div>
            </Col>
        )
    }
}

export default Event_board;