import React from 'react'
import './home.css'
import {
  AppBar,
  Card,
  Toolbar,
  Tabs,
  Tab,
  Icon,
  Button,
  InputLabel,
  CardActionArea
} from '@material-ui/core'
import templates from '../data/templates.json'
import XRLogo from '../assets/xrinnovations_white.png'
import resources from '../data/resources.json'

function Home() {

  return (
    <div className={'home-container'}>
      <AppBar position={'relative'} className={'tab-nav'}>
        <Tabs variant={'dense'}>
          {templates.map((value, index) => {
            return <Tab label={value.name} />
          })}
        </Tabs>
      </AppBar>
      <div className={'home-body'}>
        <AppBar color={'secondary'} position={'relative'} className={'tool-nav'}>
          <div className={'tool-bar'}>
            <Button className={'action-btn'} variant={'contained'} color={'primary'}>
              Generate CloudFormation
            </Button>
            <Button className={'action-btn'} variant={'contained'} color={'primary'}>
              Deploy Locally
            </Button>
            <Button className={'action-btn'} variant={'contained'} color={'primary'}>
              Deploy to AWS
            </Button>
            <Button className={'action-btn'} variant={'contained'} color={'primary'}>
              Destory Infrastructure
            </Button>
            <Button className={'action-btn'} variant={'contained'} color={'primary'}>
              Estimate Cost
            </Button>
          </div>
        </AppBar>
        <Card className={'resources-action-card'}>
          <div className={'resources-container'}>
            {resources.map((value, index) => {
              return <Card className={'resource-card'}>
                <InputLabel className={'resource-card-title'}>{value.displayName}</InputLabel>
                <CardActionArea className={'resource-card-action'}>
                  
                </CardActionArea>
              </Card>
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Home