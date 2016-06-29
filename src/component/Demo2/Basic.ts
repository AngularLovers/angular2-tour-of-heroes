import {Component} from '@angular/core';
import {UserModel} from './../../model/UserModel';

let xiaomo:UserModel = new UserModel( '我是组件2');
let xiaoming:UserModel = new UserModel('测试admin路由');

@Component({
    selector: 'basic',
    styles:[require('./Basic.scss')],
    template: require('./Basic.html')
})

export class BasicComponent2 {

    users:Object;
    constructor() {
        this.users= [ xiaomo,xiaoming];
    };
}
