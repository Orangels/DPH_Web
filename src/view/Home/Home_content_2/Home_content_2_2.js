import React from 'react'
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
// import backgroundBanner from "../../../asset/stu_back/4_学科分布.png";

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

@inject('appStore') @observer
class Home_content_2_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: home_content_2_2_data,
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

        this.setState({
            data:data
        })
    }

    render() {
        // let {component_text} = this.state.state_props
        // let persons_conversion = (this.state.pass_persons + this.state.entry_persons) == 0 ? 0 : parseInt(this.state.entry_persons / (this.state.pass_persons + this.state.entry_persons) * 100)
        return (
            <Home_content_template style={{
                width:810*screen_scale_width,
                height:358 * screen_scale_height,
                marginTop: 10*screen_scale_width,
                background: `url(${backgroundBanner}) no-repeat `,
                backgroundSize:'100% 100%',
            }} title={this.props.data['title'] || "人员统计"}>
                <div style={{
                    // background:`url(${backgroundBanner}) no-repeat `,
                    // backgroundSize: '100% 100%',
                    width:'100%',
                    height:'100%',
                    display:"flex",
                    // flexWrap:'wrap',
                    flexDirection: 'row',
                    marginTop:10*screen_scale_height,
                    justifyContent:'space-around',
                    alignItems:'flex-end'
                }}
                     className={'home_content_2_2_wrap_div'}
                >
                    {/*<Ul_component data={component_text}/>*/}
                    {/*<Chart_area  height={330*screen_scale_height}*/}
                    {/*             width={800*screen_scale_width}/>*/}
                    {/*<Histogram  title={'进出人员统计'}*/}
                    {/*            height={330*screen_scale_height}*/}
                    {/*            width={800*screen_scale_width}/>*/}
                    {/*<Single_Histogram  title={'进出人员统计'}*/}
                    {/*            height={330*screen_scale_height}*/}
                    {/*            width={800*screen_scale_width}/>*/}
                    {/*<Chart_custom  title={''}*/}
                    {/*    // height={276*screen_scale_width}*/}
                    {/*               dataSource={this.state.data}*/}
                    {/*               height={330*screen_scale_height}*/}
                    {/*               width={800*screen_scale_width}/>*/}
                    <WaterWave type="circle" width={WaterWave_radius} height={WaterWave_radius}
                               showText={`${this.props.appStore.entry_count}`}
                               showText_1={`进店人数`}
                               rangeValue={80} />
                    <WaterWave type="circle" width={WaterWave_radius} height={WaterWave_radius}
                               showText={`${this.props.appStore.leave_count}`}
                               showText_1={`离店人数`}
                               rangeValue={80} />
                    <WaterWave type="circle" width={WaterWave_radius} height={WaterWave_radius}
                               showText={`${this.props.appStore.pass_count}`}
                               showText_1={`过店人数`}
                               rangeValue={80} />

                </div>
            </Home_content_template>
        )

    }
}

export default Home_content_2_2;