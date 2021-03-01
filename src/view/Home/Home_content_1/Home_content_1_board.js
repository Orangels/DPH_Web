import React from 'react'
import {toJS} from 'mobx'
import {inject, observer} from "mobx-react";
import Home from "../Home";
import {screen_scale_height, screen_scale_width} from "../../parameter/parameters";
import {Col, Row} from "antd";
import {show_2_ste} from "../../../common/utils";

@inject('appStore') @observer
class Home_content_1_board extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Row className={Home_content_1_board}
                gutter={32} type="flex" justify="space-between"
                 style={{width: '97%', marginTop:86*screen_scale_width, marginLeft:30*screen_scale_width,
                 }}
            >
                <Col span={4}
                     className={'event_board_home_1'}
                     style={{...{display:'flex',height: 130*screen_scale_height, flexDirection:'column', padding:'10px 10px'}}}>
                    <span style={{color:"white", fontSize:14, fontWeight:'bold'}}>
                        进店人数
                    </span>
                    <span style={{color:"white", fontSize:16, textAlign:'center', fontWeight:'bold'}}>
                        {this.props.appStore.entry_count}
                    </span>
                    <div style={{display:'flex', width:'100%', height: '80%', flexDirection:'column',
                        color:"white",fontSize:12,wordSpacing:0, letterSpacing:-2
                    }}>
                        <div>
                            <span>
                                出入口 1
                            </span>
                            <span style={{marginLeft:20*screen_scale_width}}>
                                {this.props.appStore.entry_count}
                            </span>
                        </div>
                    </div>
                </Col>
                <Col span={4}
                     className={'event_board_home_1'}
                     style={{...{display:'flex',height: 130*screen_scale_height, flexDirection:'column', padding:'10px 10px'}}}>
                    <span style={{color:"white", fontSize:14, fontWeight:'bold'}}>
                        出店人数
                    </span>
                    <span style={{color:"white", fontSize:16, textAlign:'center', fontWeight:'bold'}}>
                        {this.props.appStore.leave_count}
                    </span>
                    <div style={{display:'flex', width:'100%', height: '80%', flexDirection:'column',
                        color:"white",fontSize:12,wordSpacing:0, letterSpacing:-2
                    }}>
                        <div>
                            <span>
                                出入口 1
                            </span>
                            <span style={{marginLeft:20*screen_scale_width}}>
                                {this.props.appStore.leave_count}
                            </span>
                        </div>
                    </div>
                </Col>
                <Col span={4}
                     className={'event_board_home_1'}
                     style={{...{display:'flex',height: 130*screen_scale_height, flexDirection:'column', padding:'10px 10px'}}}>
                    <span style={{color:"white", fontSize:14, fontWeight:'bold'}}>
                        过店人数
                    </span>
                    <span style={{color:"white", fontSize:16, textAlign:'center', fontWeight:'bold'}}>
                        {this.props.appStore.pass_count}
                    </span>
                    <div style={{display:'flex', width:'100%', height: '80%', flexDirection:'column',
                        color:"white",fontSize:12,wordSpacing:0, letterSpacing:-2
                    }}>
                        <div>
                            <span>
                                出入口 1
                            </span>
                            <span style={{marginLeft:20*screen_scale_width}}>
                                {this.props.appStore.pass_count}
                            </span>
                        </div>
                    </div>
                </Col>
                <Col span={4}
                     className={'event_board_home_1'}
                     style={{...{display:'flex',height: 130*screen_scale_height, flexDirection:'column', padding:'10px 10px'}}}>
                    <span style={{color:"white", fontSize:14, fontWeight:'bold'}}>
                        进店率
                    </span>
                    <span style={{color:"white", fontSize:16, textAlign:'center', fontWeight:'bold'}}>
                        {`${show_2_ste((this.props.appStore.entry_count/(this.props.appStore.entry_count+this.props.appStore.pass_count) ? this.props.appStore.entry_count/(this.props.appStore.entry_count+this.props.appStore.pass_count) : 0 )*100)}%`}
                    </span>
                    <div style={{display:'flex', width:'100%', height: '80%', flexDirection:'column',
                        color:"white",fontSize:12,wordSpacing:0, letterSpacing:-2
                    }}>
                        <div>
                            <span>
                                出入口 1
                            </span>
                            <span style={{marginLeft:20*screen_scale_width}}>
                                {`${show_2_ste((this.props.appStore.entry_count/(this.props.appStore.entry_count+this.props.appStore.pass_count) ? this.props.appStore.entry_count/(this.props.appStore.entry_count+this.props.appStore.pass_count) : 0 )*100)}%`}
                            </span>
                        </div>
                    </div>
                </Col>
                <Col span={4}
                     className={'event_board_home_1'}
                     style={{...{display:'flex',height: 130*screen_scale_height, flexDirection:'column', padding:'10px 10px'}}}>
                    <span style={{color:"white", fontSize:14, fontWeight:'bold'}}>
                        事件感知
                    </span>
                    <span style={{color:"white", fontSize:16, textAlign:'center', fontWeight:'bold'}}>
                        {this.props.appStore.act_total}
                    </span>
                    <div style={{display:'flex', width:'100%', height: '80%', flexDirection:'column',
                        color:"white",fontSize:12,wordSpacing:0, letterSpacing:-2
                    }}>
                        <div>
                            <span>
                                商品触摸
                            </span>
                            <span style={{marginLeft:20*screen_scale_width}}>
                                {this.props.appStore.act_1}
                            </span>
                        </div>
                        <div>
                            <span>
                                辅助试装
                            </span>
                            <span style={{marginLeft:20*screen_scale_width}}>
                                {this.props.appStore.act_2}
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Home_content_1_board