import * as axios from 'axios'
import * as MockAdapter from 'axios-mock-adapter'
import getMessageCategory from './mock/getMessageCategory'
import getMessageList from './mock/getMessageList'
// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/messageCategory').reply(200, getMessageCategory().data)
mock.onGet('/messages').reply(200, getMessageList().data.list)