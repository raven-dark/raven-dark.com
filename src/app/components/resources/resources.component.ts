import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ApiService } from '../../services/api.service'

type Pool = {
  poolName: string
  url: string
  searchStrings: Array<string>
}

type Status = {
  version: number
  protocolversion: number
  walletversion: number
  blocks: number
  timeoffset: number
  connections: number
  proxy: string
  difficulty: number
  testnet: boolean
  relayfee: number
  errors: string
  network: string
  reward: number
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit, AfterViewInit {

  pools: Array<Pool> = []
  supply: number
  status: Status

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.getPools()
    this.getSupply()
    this.getStatus()
  }

  getPools() {
    this.apiService.getData('https://raw.githubusercontent.com/raven-dark/insight-api/master/pools.json')
    .subscribe((result: Array<Pool>) => {
      this.pools = result
    })
  }

  getSupply() {
    this.apiService.getData('http://explorer.raven-dark.com/api/supply')
    .subscribe((result: number) => {
      this.supply = result
    })
  }

  getStatus() {
    this.apiService.getData('http://explorer.raven-dark.com/api/status')
    .subscribe((result: any) => {
      this.status = result.info
      this.status.reward = this.status.reward / 10**8
    })
  }
}
