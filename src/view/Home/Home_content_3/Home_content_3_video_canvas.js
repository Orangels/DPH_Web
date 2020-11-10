import React from 'react'
import {toJS} from 'mobx'
import {inject, observer} from "mobx-react";

import {Button, Tag} from "antd";

import video from 'video.js';
import videoSWF from 'videojs-swf/dist/video-js.swf';
import {hostname} from "../../../common/urls";
import {
    heatMapDuration,
    heatMapMaxValue,
    heatMapDurationMaxValue,
    imgHeight,
    imgWidht,
    plainOptions,
    heatmapJSDuration_radius
} from "../../parameter/home_content_2_1_parametere_data";
import Heatmap from "heatmap.js";


@inject('appStore') @observer
class Home_content_3_video_canvas extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            checkedList: [],
            canvas_width: 0,
            canvas_height: 0
        };
        this._draw = this._draw.bind(this)
        this._drawPoint = this._drawPoint.bind(this)
    }

    _draw(){
        //heatMap
        this.heatMapPoints = this.props.appStore.fishHeatMapPoints || {}
        //heatMapDuration
        this.heatMapDurationPoints = this.props.appStore.fishHeatMapDurationPoints || {}

        requestAnimationFrame(()=>{
            this._drawPoint(this.heatMapPoints, this.heatMapDurationPoints)
        })
    }

    _drawPoint(heatMapPoints, heatMapDurationPoints) {
        let data = []
        let durationDate = []

        for (let heatMapPoint in heatMapPoints){
            let result = {}
            result.x = heatMapPoints[heatMapPoint].x
            result.y = heatMapPoints[heatMapPoint].y
            result.value = heatMapPoints[heatMapPoint].value
            data.push(result)
        }

        for (let heatMapDurationPoint in heatMapDurationPoints){
            let result = {}
            result.x = heatMapDurationPoints[heatMapDurationPoint].x
            result.y = heatMapDurationPoints[heatMapDurationPoint].y
            result.value = parseInt(heatMapDurationPoints[heatMapDurationPoint].value / heatMapDuration)
            // result.value = parseInt(heatMapDurationPoints[heatMapDurationPoint].value)
            durationDate.push(result)
        }

        //去重 相同 x,y 坐标的值, 取 value 最大值
        let durationDateUnrepetitionObj = {}
        let durationDateUnrepetitionArr = []
        for (let i = 0; i < durationDate.length; i++){
            if (durationDateUnrepetitionObj.hasOwnProperty(`${durationDate[i].x},${durationDate[i].y}`)){
                if (durationDateUnrepetitionObj[`${durationDate[i].x},${durationDate[i].y}`] < durationDate[i].value){
                    durationDateUnrepetitionObj[`${durationDate[i].x},${durationDate[i].y}`] = durationDate[i].value
                }
            }else {
                // durationDateUnrepetitionObj[[durationDate[i].x,durationDate[i].y]]
                durationDateUnrepetitionObj[`${durationDate[i].x},${durationDate[i].y}`] = durationDate[i].value
            }
        }

        for (let key in durationDateUnrepetitionObj) {
            console.log('~~~~')
            console.log(durationDateUnrepetitionObj[key])
            durationDateUnrepetitionArr.push({
                x:parseInt(key.split(',')[0]),
                y:parseInt(key.split(',')[1]),
                value: durationDateUnrepetitionObj[key]
            })
        }

        // console.log('去重 heatmap')
        // console.log(durationDateUnrepetitionArr)

        this.heatMap.setData({

            max: heatMapMaxValue,

            data

        })

        this.durantionHeatMap.setData({

            max: heatMapDurationMaxValue,

            data: durationDateUnrepetitionArr

        })
    }

    componentDidMount() {

        //heatMap
        this.heatMapPoints = this.props.appStore.fishHeatMapPoints || {}
        //heatMapDuration
        this.heatMapDurationPoints = this.props.appStore.fishHeatMapDurationPoints || {}

        let options = {
            autoplay: true,
            controls: true,
            preload: true, //预加载
            fluid: true, //播放器将具有流畅的大小。换句话说，它将扩展以适应其容器
            techOrder: ['flash'],//Video.js技术首选的顺序
            aspectRatio: '1:1',//将播放器置于流体模式，在计算播放器的动态大小时使用。由冒号（"16:9"或"4:3"）分隔的两个数字
            flash: {swf: videoSWF},
            live: true,
            sources: [{
                type: "rtmp/flv",
                src: `rtmp://${hostname}:1935/hls/000`,
            }],
        }

        this.player = video(`home_example_video_0`, options);

        let canvas_width = document.getElementsByClassName('ls_home_fishVideo')[0].clientWidth;
        let canvas_height = document.getElementsByClassName('ls_home_fishVideo')[0].clientHeight;

        this.props.appStore.updateHomeFishVideoCanvasSize(canvas_width);

        this.setState({
            canvas_width,
            canvas_height
        }, ()=>{
            // init heatMap
            this.heatMap = Heatmap.create({

                container: document.getElementById('ls_fishVideo_heatmap_canvas'),

                // radius: 80,
                radius: 0,

                maxOpacity: .9,

                minOpacity: 0,

                blur: 1,

                // backgroundColor: '#0DEEFF',

                gradient: {

                    '.1': '#32A933',

                    '.2': '#3ACB49',

                    '.4': '#94E149',

                    '.8': '#CDDE40',

                    '1': '#ED6B44'

                }

            });

            // init durationHeatMap
            this.durantionHeatMap = Heatmap.create({

                container: document.getElementById('ls_fishVideo_heatmap_duration_canvas'),

                // radius: 80,
                radius: heatmapJSDuration_radius,

                maxOpacity: .9,

                minOpacity: 0,

                blur: 1,

                // backgroundColor: '#0DEEFF',

                gradient: {

                    '.2': '#32A933',

                    '.4': '#3ACB49',

                    '.6': '#94E149',

                    '.8': '#CDDE40',

                    '1': '#ED6B44'

                }

            });
        })


    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    componentWillUnmount() {

        this.player && this.player.dispose()
    }

    render() {
        return (
            <div style={{width: `100%`, position: "relative", marginRight: "2%",}}>
                <Tag color={'#FA0F21'} style={{position: 'absolute', top: 10, right: 10, zIndex: 99}}
                     closable>
                    {`鱼眼 0`}
                </Tag>
                <video id={`home_example_video_0`} className="video-js vjs-default-skin video_0 ls_home_fishVideo"
                       preload="auto"
                       autoPlay="autoplay"
                    // style={{width:'100%', height:content_1_height,
                       style={{
                           width: '100%',
                           // objectFit:"fill"
                           // objectFit:'contain'
                           zIndex:1
                       }}
                       ref={(input) => {
                           this.video = input;
                       }}

                >
                    <source src="rtmp://192.168.88.221:1935/hls/room" type="rtmp/flv"/>
                </video>
                <div className={`ls_fish_heatmap_canvas_wrap`} style={{position:"absolute", top:0,
                    // zIndex: this.state.checkedList.includes(plainOptions[1]) ? 19 : -1,
                }}>
                    <div id="ls_fishVideo_heatmap_canvas"
                         style={{
                             border: '0px solid #FF1C1F', borderRadius: 5,
                             zIndex: this.state.checkedList.includes(plainOptions[1]) ? 19 : -1,
                             position: "absolute", top: 0,
                             width: this.state.canvas_width,
                             height: this.state.canvas_height,
                         }}/>
                </div>
                <div className={`ls_fish_heatmap_duration_canvas_wrap`} style={{position:"absolute", top:0,
                    // zIndex: this.state.checkedList.includes(plainOptions[1]) ? 19 : -1,
                }}>
                    <div id="ls_fishVideo_heatmap_duration_canvas"
                         style={{
                             border: '0px solid #FF1C1F', borderRadius: 5,
                             zIndex: this.state.checkedList.includes(plainOptions[2]) ? 9 : -1,
                             position: "absolute", top: 0,
                             width: this.state.canvas_width,
                             height: this.state.canvas_height,
                         }}/>
                </div>
            </div>
        )
    }
}

export default Home_content_3_video_canvas;