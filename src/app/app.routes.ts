import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Service } from './service/service';
import { Packages } from './packages/packages';
import { Home } from './home/home';

export const routes: Routes = [
  // {path:'',component:Home},

  { path: 'about', component: About },
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'service', component: Service },
  { path: 'packages', component: Packages },
];
