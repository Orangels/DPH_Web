import {observable, action} from 'mobx'
import Queue_len from "../../common/dataStructs"

import {deepCopy} from "../../common/utils";

class AppStore {

    @observable isLogin = true

    @observable entryPersons = new Queue_len(8)

    @observable imgageIcomCoors = []
    @observable heatMapPoints = {}
    @observable heatMapDurationPoints = {}
    //fishHeatMap
    @observable fishHeatMapPoints = {}
    @observable fishHeatMapDurationPoints = {}

    @observable trackIDsArr = {}
    @observable trackerArr = []

    @observable trackerTimestamp = "1970-01-01 00:00:00"

    @observable entruUser = []

    @observable home_fishVideo_canvas_width = 710
    @observable home_fishVideo_canvas_height = 710

    @observable entry_count = 0;    //进店人数
    @observable leave_count = 0;    //离店人数
    @observable pass_count = 0;     //过店人数

    @action updateEntryPersons(vPersons) {
        // this.entryPersons = deepCopy(vPersons)
        this.entryPersons = vPersons
    }

    @action updateImgageIcomCoors(vImgageIcomCoors) {
        this.imgageIcomCoors = deepCopy(vImgageIcomCoors)
    }

    @action updateHeatMapPoints(vHeatMapPoints) {
        this.heatMapPoints = deepCopy(vHeatMapPoints)
    }

    @action updateHeatMapDurationPoints(vHeatMapDurationPoints) {
        this.heatMapDurationPoints = deepCopy(vHeatMapDurationPoints)
    }

    //fishHeatMap
    @action updateFishHeatMapPoints(vFishHeatMapPoints) {
        this.fishHeatMapPoints = deepCopy(vFishHeatMapPoints)
    }

    @action updateFishHeatMapDurationPoints(vFishHeatMapDurationPoints) {
        this.fishHeatMapDurationPoints = deepCopy(vFishHeatMapDurationPoints)
    }

    @action updateHomeFishVideoCanvasSize(vWidth) {
        this.home_fishVideo_canvas_width = vWidth;
    }

    @action updateTrackIDsArr(vTrackIDsArr) {
        this.trackIDsArr = deepCopy(vTrackIDsArr)
    }

    @action updateTrackerArr(vTrackerArr) {
        this.trackerArr = deepCopy(vTrackerArr)
    }

    @action updateEntruUser(vEntruUser) {
        // this.entruUser = deepCopy(vEntruUser)
        this.entruUser = vEntruUser
    }

    @action updateTrackerTimestamp(vTimestamp) {
        this.trackerTimestamp = vTimestamp
    }

    @action updateStatistics(vEntryCount, vLeaveCount, vPassCount) {
        this.entry_count = vEntryCount;
        this.leave_count = vLeaveCount;
        this.pass_count = vPassCount;
    }

    @action initUsers() {
        const localUsers = localStorage['users'] ? JSON.parse(localStorage['users']) : []
        this.users = [{username: 'admin', password: 'admin', auth: 0}, ...localUsers, ...this.users]
    }
}

export default new AppStore()