# coding: utf-8
import tornado.ioloop
import tornado.web
from apis.urls import urls

application = tornado.web.Application(urls)

if __name__ == '__main__':
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
