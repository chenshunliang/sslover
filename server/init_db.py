# coding: utf-8
from model import Base, Photo, Position, User
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

if __name__ == '__main__':
    engine = create_engine(
        'mysql+mysqldb://root:root_password@127.0.0.1/sslove?charset=utf8', connect_args={'charset': 'UTF8'}, echo=True, encoding='UTF-8')

    Base.metadata.create_all(engine)
