import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Select,
  Slider,
  Switch,
  Modal,
  Tag,
  Input,
  Form,
  Menu,
  Dropdown
} from 'ant-design-vue'

import './assets/styles/tailwind.css'
import './assets/styles/app.scss'

const app = createApp(App)

app
  .use(Button)
  .use(Select)
  .use(Slider)
  .use(Switch)
  .use(Modal)
  .use(Tag)
  .use(Input)
  .use(Form)
  .use(Menu)
  .use(Dropdown)
  .use(router)
  .mount('#app')
