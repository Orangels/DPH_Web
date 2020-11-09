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


    @action updateEntryPersons(vPersons){
        // this.entryPersons = deepCopy(vPersons)
        this.entryPersons = vPersons
    }

    @action updateImgageIcomCoors(vImgageIcomCoors){
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

    @action updateTrackIDsArr(vTrackIDsArr) {
        this.trackIDsArr = deepCopy(vTrackIDsArr)
    }

    @action updateTrackerArr(vTrackerArr){
        this.trackerArr = deepCopy(vTrackerArr)
    }

    @action updateEntruUser(vEntruUser) {
        // this.entruUser = deepCopy(vEntruUser)
        this.entruUser = vEntruUser
    }

    @action updateTrackerTimestamp(vTimestamp){
        this.trackerTimestamp = vTimestamp
    }

    @action initUsers() {
        const localUsers = localStorage['users']?JSON.parse(localStorage['users']):[]
        this.users = [{username: 'admin', password: 'admin', auth:0},...localUsers, ...this.users]
    }
}

export default new AppStore()