import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from '../about/About';
import Careers from '../careers/Careers';
import Contacts from '../contacts/Contact';
import FillMe from '../fillme/FillMe';
import Products from '../products/Products';
import Qoutes from '../qoutes/Qoutes';
import Services from '../services/Services';
import SignIn from '../signin/Signin';
import SportMe from '../sportme/SportMe';
import Login from '../myaccount/Login';
import Account from '../myaccount/Account';
import Header from '../header/Header'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/careers' component={Careers}/>
        <Route path='/contact' component={Contacts}/>
        <Route path='/fillme' component={FillMe}/>
        <Route path='/products' component={Products}/>
        <Route path='/qoutes' component={Qoutes}/>
        <Route path='/register' component={SignIn}/>
        <Route path='/services' component={Services}/>
        <Route path='/sportme' component={SportMe}/>
        <Route path='/login' component={Login}/>
        <Route path='/account' component={Account}/>
        <Route path='/partners' component={Account}/>

      </Switch>
    </main>
  )

export default Main
