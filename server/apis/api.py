# coding: utf-8
import tornado.web


class PositionHandler(tornado.web.RequestHandler):
    '''
    签到api
    '''

    def initialize(self, session):
        self.session = session

    def get(self, open_id):
        pass

    def post(self, open_id):
        pass


class PhotoHandler(tornado.web.RequestHandler):
    '''
    相册api
    '''

    def initialize(self, session):
        self.session = session

    def get(self, open_id):
        pass

    def post(self, open_id):
        pass
