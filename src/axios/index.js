import axios from 'axios';
import { get } from './tools';
import * as config from './config';



export const admin = () => get(config.LOGIN_AUTH)

export const user = () => get(config.USER_AUTH)

export const gettable = () => get(config.TABLE_AUTH)



