import { Component, Input } from '@angular/core';

@Component({

selector:'app-stats-card',

standalone:true,

templateUrl:'./stats-card.html',

styleUrl:'./stats-card.scss'

})

export class StatsCard{

@Input()

title="";

@Input()

value:any;

}