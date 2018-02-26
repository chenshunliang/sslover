# coding: utf-8
import tornado.ioloop
import tornado.web

application = tornado.web.Application([

])

if __name__ == '__main__':
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
