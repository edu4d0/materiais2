
//main.js Default import e export
import qualquerNome from './utils.js' // nessa linha ele importa e já executa o arquivo

// main.js named export

import { today } from './utils.js'
import { double (5) } from './utils.js'

// main.js Misto (Named e default)

import funcaoPadrao, { date, greeting } from './utils.js'

// main.js import as

import {sum as soma} from './utils.js'

// main.js import * as
import * as calculator from './utils.js'


