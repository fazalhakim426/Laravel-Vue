import { createRouter, createWebHistory } from "vue-router";

import ComponentIndex from '../compnents/companies/CompaniesIndex'
const routes = [
    {
         path: '/dashboard',
         name: 'companies.index',
         component:ComponentIndex
     }
]

export default createRouter(
    {
        history : createWebHistory(),
        routes

    }
)