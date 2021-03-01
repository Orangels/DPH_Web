import React from 'react'
import {Row, Col} from 'antd'
import Chart_area from "../../Chart/Chart_area"
import {screen_scale_height, screen_scale_width} from "../../parameter/parameters";
import Home_content_template from "../../../common/Home_content_template";
import WaterWave from '../../../common/component/WaterWave'
// import backgroundBanner from '../../../asset/back_new/10_数据概览.png'
import backgroundBanner from '../../../asset/back_new/数据概览.png'
import Chart_custom from "../../Chart/Chart_custom";
import Single_Histogram from '../../Chart/Chart_singleHistogram'
import Histogram from "../../Chart/Histogram";
import {inject, observer} from "mobx-react";
// import xxs from "../../../asset/test/xxs_icon.jpg";
import test_gif from "../../../asset/test/test.gif";

// import backgroundBanner from "../../../asset/stu_back/4_学科分布.png";
import Event_board from './event_board'
import {url} from "../../../common/urls";

let WaterWave_radius = 240 * screen_scale_width

let Ul_component = ({data, style})=> {
    let textContent = data.map((value,index)=>{
        let left = index%2 === 0 ? 34*screen_scale_width : 200*screen_scale_width
        return (
            <li style={{
                listStyle:'disc outside',
                color:'#FFFFFF',
                marginLeft:left,
                // marginTop:22*screen_scale_width,
                marginTop:15*screen_scale_height,
                // width:130/0.75*screen_scale_width
                width:180/0.75*screen_scale_width
            }} key={`li_${index}`}>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                }}>
                    <span style={{fontSize:14*screen_scale_width, color:'#FFFFFF',}}>
                        {value['title']}
                    </span>
                    <span style={{fontSize:10*screen_scale_width, color:'#FFFFFF', letterSpacing:0.2}}>
                        <span style={{fontSize:18*screen_scale_width,color:'#09FAFC'}}>
                            {value['text_1']}
                        </span>人,平均<span style={{color:'#09FAFC'}}>{value['text_2']}</span>人/小时
                    </span>
                </div>
            </li>
        )
    })
    return (
        <ul style={{
            display:'flex',
            flexWrap:'wrap',
            flexDirection: 'row',
            alignItems:'flex-start'
        }}>
            {textContent}
        </ul>
    )
}

let home_content_2_2_data = [
    {
        time: "8:00",
        state_type: "进入人数",
        // state: randomNum(5,10)
        state: 0
    },
    {
        time: "8:00",
        state_type: "离开人数",
        // state: randomNum(0,8)
        state: 0
    },
    {
        time: "8:00",
        state_type: "陌生人数",
        // state: randomNum(1,5)
        state: 0
    },
    {
        time: "8:05",
        state_type: "进入人数",
        // state: randomNum(5,10)
        state: 0
    },
    {
        time: "8:05",
        state_type: "离开人数",
        // state: randomNum(0,8)
        state: 0
    },
    {
        time: "8:05",
        state_type: "陌生人数",
        // state: randomNum(1,5)
        state: 0
    },
    {
        time: "8:10",
        state_type: "进入人数",
        // state: randomNum(5,10)
        state: 0
    },
    {
        time: "8:10",
        state_type: "离开人数",
        // state: randomNum(0,8)
        state: 0
    },
    {
        time: "8:10",
        state_type: "陌生人数",
        // state: randomNum(1,5)
        state: 0
    },
    {
        time: "8:15",
        state_type: "进入人数",
        // state: randomNum(5,10)
        state: 0
    },
    {
        time: "8:15",
        state_type: "离开人数",
        // state: randomNum(0,8)
        state: 0
    },
    {
        time: "8:15",
        state_type: "陌生人数",
        // state: randomNum(1,5)
        state: 0
    },
    {
        time: "8:20",
        state_type: "进入人数",
        // state: randomNum(5,10)
        state: 0
    },
    {
        time: "8:20",
        state_type: "离开人数",
        // state: randomNum(0,8)
        state: 0
    },
    {
        time: "8:20",
        state_type: "陌生人数",
        // state: randomNum(1,5)
        state: 0
    },
    {
        time: "8:25",
        state_type: "进入人数",
        // state: randomNum(5,10)
        state: 0
    },
    {
        time: "8:25",
        state_type: "离开人数",
        // state: randomNum(0,8)
        state: 0
    },
    {
        time: "8:25",
        state_type: "陌生人数",
        // state: randomNum(1,5)
        state: 0
    },
    {
        time: "8:30",
        state_type: "进入人数",
        // state: randomNum(5,10)
        state: 0
    },
    {
        time: "8:30",
        state_type: "离开人数",
        // state: randomNum(0,8)
        state: 0
    },
    {
        time: "8:30",
        state_type: "陌生人数",
        // state: randomNum(1,5)
        state: 0
    },
    {
        time: "8:35",
        state_type: "进入人数",
        // state: randomNum(5,10)
        state: 0
    },
    {
        time: "8:35",
        state_type: "离开人数",
        // state: randomNum(0,8)
        state: 0
    },
    {
        time: "8:35",
        state_type: "陌生人数",
        // state: randomNum(1,5)
        state: 0
    },
]

let event_content = [
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },
    {
        timestamp:"09:20:30",
        content: "顾客试装"
    },

]

let event_img = [test_gif, test_gif, test_gif, test_gif, test_gif, test_gif, test_gif]

@inject('appStore') @observer
class Home_content_2_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: home_content_2_2_data,
            data:[],
            entry_persons: 0,
            pass_persons: 0,
        }

    }

    componentDidMount() {
        let {data} = this.props || home_content_2_2_data

        this.setState({
            data:data
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let {data} = nextProps || home_content_2_2_data
        // console.log('state data')
        // console.log(this.state.data)
        // console.log('*************')
        // console.log(data)
        this.setState({
            data:data
        })
    }

    render() {
        // let {component_text} = this.state.state_props
        // let persons_conversion = (this.state.pass_persons + this.state.entry_persons) == 0 ? 0 : parseInt(this.state.entry_persons / (this.state.pass_persons + this.state.entry_persons) * 100)


        let pic_wall = this.state.data.map((val, index)=>{
            return (
                <img width={"33%"} height={250 * screen_scale_height} src={`${url}${val.pic}`} style={{marginLeft:5}}/>
            )
        })


        return (
            <Row style={{
                width:810*screen_scale_width,
                height:358 * screen_scale_height,
                marginTop: 10*screen_scale_width,
                // background: `url(${backgroundBanner}) no-repeat `,
                backgroundSize:'100% 100%',
                // padding: '0 10px'

            }}
                 gutter={16}
                 // title={this.props.data['title'] || "人员统计"}
            >
                <Col span={7}>
                    <Event_board title={"事件感知:"} litTitle={'当天记录:'}
                                 // content={event_content}
                                 content={this.state.data}
                                 style={{
                        height:258 * screen_scale_height,}}/>
                </Col>
                <Col span={17} style={{display:'flex',
                    overflowX:'scroll'
                }}
                     className={'mirror_img'}
                >
                    {pic_wall}
                </Col>

            </Row>
        )

    }
}

export default Home_content_2_2;