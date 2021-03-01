import React from 'react'
import {toJS} from 'mobx'
import io from 'socket.io-client'
import Template from '../../common/composite_template'

import Event_board from './Home_content_1/event_board'
import Home_content_1_board from './Home_content_1/Home_content_1_board'
import Home_statistical from './Home_statistical'
import Home_content_1_1 from './Home_content_1/Home_content_1_1'
import Home_content_1_2 from './Home_content_1/Home_content_1_2'
import Home_content_2_1 from './Home_content_2/Home_content_2_1'
import Home_content_2_2 from './Home_content_2/Home_content_2_2'
import Home_content_3_1 from './Home_content_3/Home_content_3_1'
import Home_content_3_2 from './Home_content_3/Home_content_3_2'
import Home_content_3_3 from './Home_content_3/Home_content_3_3'
import Home_content_3_video_canvas from './Home_content_3/Home_content_3_video_canvas'

import Home_content_2_1_canvas from './Home_content_2/Home_content_2_1_canvas'
import Home_content_2_process from './Home_content_2/Home_content_2_process'

import {screen_scale_width, screen_scale_height} from "../parameter/parameters";
import {url, downloadfile, hostname} from '../../common/urls'
import {Home_data} from './Home_data'
import Home_content_template from "../../common/Home_content_template";
import Chart_custom from "../Chart/Chart_custom";
import Histogram from '../Chart/Histogram'
import {randomNum, _fetch, deepCopy, _download_file, show_2_ste} from "../../common/utils";
import {inject, observer} from "mobx-react";
import {Button, Tag, Progress, Row, Col} from "antd";

import video from 'video.js';
import videoSWF from 'videojs-swf/dist/video-js.swf';

const style = {
    content:{
        // marginTop:96*screen_scale_width,
        marginTop:20*screen_scale_width,
        marginLeft:30*screen_scale_width,
        display:'flex',
        flexDirection:'column',
        overflowY:'hidden',
    },
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

// let home_content_1_1_data = [
//     {
//         title:'进店人数',
//         text:'0 人次',
//         content:[
//             {
//               title:'出入口 1',
//               content:'0 人次'
//             },
//             // {
//             //     title:'出入口 2',
//             //     content:'0 人次'
//             // },
//         ]
//     },
//     {
//         title:'出店人数',
//         text:'0 人次',
//         content:[
//             {
//                 title:'出入口 1',
//                 content:'0 人次'
//             },
//             // {
//             //     title:'出入口 2',
//             //     content:'0 人次'
//             // },
//         ]
//     },
//     {
//         title:'过店人数',
//         text:'0 人次',
//         content:[
//             {
//                 title:'出入口 1',
//                 content:'0 人次'
//             },
//             // {
//             //     title:'出入口 2',
//             //     content:'0 人次'
//             // },
//         ]
//     },
//     {
//         title:'进店率',
//         text:'0 %',
//         content:[
//             {
//                 title:'出入口 1',
//                 content:'0 %'
//             },
//             // {
//             //     title:'出入口 2',
//             //     content:'0 %'
//             // },
//         ]
//     },
//     {
//         title:'事件感知',
//         text:'25 次',
//         content:[
//             {
//                 title:'商品触摸',
//                 content:'0 次'
//             },
//             {
//                 title:'辅助试装',
//                 content:'0 次'
//             },
//         ]
//     },
// ]

@inject('appStore') @observer
class Home extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            // home_content_1_1_data: home_content_1_1_data,
            class_statistical:Home_data.class_statistical,
            preview_data:Home_data.preview_data,
            current_page: 0,
            // url: 'http://127.0.0.1:9000/get_state'
            url: 'http://192.168.88.27:9000/get_state',
            entryPersons:{
                entry:0,
                exit:0,
                register:0,
                unRegister:0
            },
            home_circle_data:{
                entry:[
                    {
                        count: 0,
                        item: '进入',
                    },
                    {
                        count: 0,
                        item: '离开',
                    },
                ],
                register:[
                    {
                        count: 0,
                        item: '已注册',
                    },
                    {
                        count: 0,
                        item: '未注册',
                    },
                ],
            },
            home_content_2_2_data: home_content_2_2_data,
            home_content_2_2_update_index:0,
            Home_content_2_2_results:[]
        };
        // this._updata_data = this._updata_data.bind(this)
        this.sync_draw = this.sync_draw.bind(this)
        this._ws_new_coor = this._ws_new_coor.bind(this)
        this._ws_new_sop = this._ws_new_sop.bind(this)
        this._ws_new_state = this._ws_new_state.bind(this)
        this._update_home_content_2_data = this._update_home_content_2_data.bind(this)
        this.mapClick = this.mapClick.bind(this)
        this.generatePDF = this.generatePDF.bind(this)
        this.sync_checkedList = this.sync_checkedList.bind(this)


        this.home_content_1_1_data = [
            {
                title:'进店人数',
                text:this.props.appStore.entry_count,
                content:[
                    {
                        title:'出入口 1',
                        content:this.props.appStore.entry_count
                    },
                    // {
                    //     title:'出入口 2',
                    //     content:'0 人次'
                    // },
                ]
            },
            {
                title:'出店人数',
                text:this.props.appStore.leave_count,
                content:[
                    {
                        title:'出入口 1',
                        content:this.props.appStore.leave_count
                    },
                    // {
                    //     title:'出入口 2',
                    //     content:'0 人次'
                    // },
                ]
            },
            {
                title:'过店人数',
                text:this.props.appStore.pass_count,
                content:[
                    {
                        title:'出入口 1',
                        content:this.props.appStore.pass_count
                    },
                    // {
                    //     title:'出入口 2',
                    //     content:'0 人次'
                    // },
                ]
            },
            {
                title:'进店率',
                text:`${show_2_ste((this.props.appStore.entry_count/(this.props.appStore.entry_count+this.props.appStore.pass_count) ? this.props.appStore.entry_count/(this.props.appStore.entry_count+this.props.appStore.pass_count) : 0 )*100)}%`,
                content:[
                    {
                        title:'出入口 1',
                        content:`${show_2_ste((this.props.appStore.entry_count/(this.props.appStore.entry_count+this.props.appStore.pass_count) ? this.props.appStore.entry_count/(this.props.appStore.entry_count+this.props.appStore.pass_count) : 0 )*100)}%`
                    },
                    // {
                    //     title:'出入口 2',
                    //     content:'0 %'
                    // },
                ]
            },
            {
                title:'事件感知',
                text:'25 次',
                content:[
                    {
                        title:'商品触摸',
                        content:'0 次'
                    },
                    {
                        title:'辅助试装',
                        content:'0 次'
                    },
                ]
            },
        ]
    }

    generatePDF(){
        _download_file(downloadfile,{

        },(blob)=> {
            let url_tmp = window.URL.createObjectURL(blob);
            let filename = 'report.pdf'
            let a = document.createElement('a')
            a.href = url_tmp;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url_tmp);
        })
    }

    _update_home_content_2_data(){
        let index = this.state.home_content_2_2_update_index
        index = index % (home_content_2_2_data.length)
        let entry_persons = this.state.home_circle_data.entry[0].count;
        let exit_persons = this.state.home_circle_data.entry[1].count;
        let register_persons = this.state.home_circle_data.register[1].count;

        let home_content_2_2_updateData = deepCopy(this.state.home_content_2_2_data)

        home_content_2_2_updateData[index].state = entry_persons;
        home_content_2_2_updateData[index+1].state = exit_persons;
        home_content_2_2_updateData[index+2].state = register_persons;

        index += 3
        this.setState({
            home_content_2_2_data:home_content_2_2_updateData,
            home_content_2_2_update_index: index
        },()=>{
            // console.log(this.state.home_content_2_2_data)
            // console.log(this.state.home_content_2_2_update_index)
        })





    }

    _ws_new_state(data) {
        let entryPersons = toJS(this.props.appStore.entryPersons)
        let persons_arr_cp = deepCopy(entryPersons)
        let persons = persons_arr_cp.data
        let entryPersons_state = deepCopy(this.state.entryPersons)
        let registerPerson = 0
        let unRegisterPerson = 0
        entryPersons_state.entry = persons.length
        persons.forEach((person, index)=>{
            if (person.rec) {
                registerPerson += 1
            }else {
                unRegisterPerson += 1
            }
        })
        entryPersons_state.register = registerPerson
        entryPersons_state.unRegister = unRegisterPerson

        //update home_circle_data

        let home_circle_data = {
            entry:[
                {
                    count: entryPersons_state.entry,
                    item: '进入',
                },
                {
                    count: entryPersons_state.exit,
                    item: '离开',
                },
            ],
            register:[
                {
                    count: entryPersons_state.register,
                    // count: 10,
                    item: '已注册',
                },
                {
                    count: entryPersons_state.unRegister,
                    item: '未注册',
                },
            ],
        }

        this.setState({
            entryPersons: entryPersons_state,
            home_circle_data
        }, ()=>{
            console.log(this.state.entryPersons)
            console.log(this.state.home_circle_data)
        })
    }


    _ws_new_sop(results){
        this.setState({
            Home_content_2_2_results:results
        })
    }

    _ws_new_coor(ImageRect, trackerArr, heatMapPoints, heatMapDurationPoints,
                 fishHeatMapPoints, fishHeatMapDurationPoints){
        // let results = data.result
        // console.log('*******')
        // console.log(this.refs.canvasComponent)

        // this.refs.canvasComponent.wrappedInstance._update_data(deepCopy(results['bbox']));
        // console.log('draw canvas')

        // window.requestAnimationFrame(this.refs.canvasComponent.wrappedInstance._draw)
        // this.refs.canvasComponent.wrappedInstance._draw

        this.ImageRect = ImageRect;
        this.trackerArr = trackerArr;
        this.heatMapPoints = heatMapPoints;
        this.heatMapDurationPoints = heatMapDurationPoints;
        this.fishHeatMapPoints = fishHeatMapPoints;
        this.fishHeatMapDurationPoints = fishHeatMapDurationPoints;
        this.sync_draw();

    }

    sync_draw(){
        this.refs.canvasComponent.wrappedInstance._draw(this.ImageRect, this.trackerArr, this.heatMapPoints, this.heatMapDurationPoints);
        this.refs.Home_content_3_video_canvas.wrappedInstance._draw(this.ImageRect, this.trackerArr, this.fishHeatMapPoints, this.fishHeatMapDurationPoints);
    }

    sync_checkedList(checkedList){
        this.refs.Home_content_3_video_canvas.wrappedInstance.setState({
            checkedList
        })
    }

    componentDidMount() {
        // let url_socket = `${url}/Camera_Web_ws`
        //本机测试 用固定 url
        // console.log('长连接 服务器')
        // 测试 先关闭 socket
        // this.socket = io(url_socket)
        // this.socket.on('new_coor',this._ws_new_coor)
        // this._ws_new_state()
        this.timer = setInterval(this._update_home_content_2_data, 2000);
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
        // this.socket.disconnect()
        // this.socket.emit('disconnect')
        // console.log('clear home_1_2 timer')
    }


    mapClick(e){
        console.log(`Home click ${e}`)
        let data_tmp = {}
        let total_persons = randomNum(5, 10)
        let exit_persons = randomNum(0, 5)
        let onLine_person = randomNum(0,total_persons)
        let none_persons = total_persons - onLine_person
        data_tmp['text_content'] = [
            ['布控位置', `大厅门 ${e % 5}`],
            ['进入人数', total_persons],
            ['离开人数', exit_persons],
            ['在线人员', onLine_person],
            ['陌生人',  none_persons],
        ]
        let class_statistical_data = Object.assign({},this.state.class_statistical, data_tmp)
        this.setState({
            class_statistical:class_statistical_data,
            current_page: e % 5
        })
    }

    render() {

        let Home_1_1_content = this.home_content_1_1_data.map((val, index)=>{
            let span = 4
            // if (index == this.state.home_content_1_1_data.length - 1){
            //     span = 4
            // }

            return (
                <Col span={span}
                     className={'event_board_home_1'}
                     style={{...{display:'flex',height: 130*screen_scale_height, flexDirection:'column', padding:'10px 10px'}}}>
                <span style={{color:"white", fontSize:14, fontWeight:'bold'}}>
                    {val.title}
                </span>
                    <span style={{color:"white", fontSize:16, textAlign:'center', fontWeight:'bold'}}>
                    {val.text}
                </span>
                    <div style={{display:'flex', width:'100%', height: '80%', flexDirection:'column',
                        color:"white",fontSize:12,wordSpacing:0, letterSpacing:-2
                    }}>
                        {val.content.map((val_item, index_item)=>{
                            return (
                                <div>
                                <span>
                                    {val_item.title}
                                    {/*{this.props.appStore.entry_count}*/}
                                </span>
                                    <span style={{marginLeft:20*screen_scale_width}}>
                                    {val_item.content}
                                        {/*{this.props.appStore.entry_count}*/}
                                </span>
                                </div>

                            )
                        })}
                    </div>
                </Col>
            )
        })

        return (
            <Template classTag={'Home'} current_page={0} history={this.props.history}
                      style={{height:1080*screen_scale_height, justifyContent:'space-between', position:'relative'}}
                      new_coor={this._ws_new_coor}
                      new_sop={this._ws_new_sop}
                      ref="totalWrapComponent"
            >
                <div className={'home_wrap_test'}
                     style={{height:1080*screen_scale_height, justifyContent:'space-between', position:'relative',
                         display:'flex', flexDirection:"column", width:'100%'}}>
                    {/*<Row gutter={32} type="flex" justify="space-between"*/}
                    {/*     style={{width: '97%', marginTop:86*screen_scale_width, marginLeft:30*screen_scale_width,*/}
                    {/*     }}*/}
                    {/*>*/}
                    {/*    {Home_1_1_content}*/}
                    {/*</Row>*/}
                    {Home_content_1_board}
                    <div style={{width: '100%',
                        // height:1080*screen_scale_width,
                        // height:1080*screen_scale_height,
                        height: 'auto',
                        display: 'flex',
                        position: 'relative',
                        overflowY:'hidden',}}>
                        <div style={{...style.content, ...{overflow:"visible", marginLeft: 100*screen_scale_width}}} className={'Home_content_2'}>
                            {/*<Home_content_2_1 click={this.mapClick} />*/}
                            <Home_content_2_1_canvas ref="canvasComponent" sync_checkedList={this.sync_checkedList} sync_draw={this.sync_draw}/>
                            {/*<Home_content_2_2 data={this.state.home_content_2_2_data}/>*/}
                            <Home_content_2_2 ref="Home_content_2_2" data={this.state.Home_content_2_2_results}/>
                        </div>
                        {/*<Home_content_2_process />*/}
                        <div className={'ls_home_video_wrap'}
                             style={{...style.content, ...{paddingLeft:10, position:"relative", width:'50%', marginLeft:100*screen_scale_width, marginRight:30*screen_scale_width}}} >
                            <Home_content_3_video_canvas ref="Home_content_3_video_canvas"/>
                        </div>
                    </div>
                </div>
                {/*<div style={{...style.content, overflow:"visible"}} className={'Home_content_2'}>*/}
                {/*    /!*<Home_content_2_1 click={this.mapClick} />*!/*/}
                {/*    <Home_content_2_1_canvas ref="canvasComponent" sync_checkedList={this.sync_checkedList} sync_draw={this.sync_draw}/>*/}
                {/*    <Home_content_2_2 data={this.state.home_content_2_2_data}/>*/}
                {/*</div>*/}
                {/*/!*<Home_content_2_process />*!/*/}
                {/*<div className={'ls_home_video_wrap'}*/}
                {/*    style={{...style.content, ...{paddingLeft:10, position:"relative", width:'50%', marginLeft:0, marginRight:30*screen_scale_width}}} >*/}
                {/*    <Home_content_3_video_canvas ref="Home_content_3_video_canvas"/>*/}
                {/*</div>*/}
            </Template>
        )
    }

}
export default Home