# coding: utf-8
from model import Base, Photo, Position, User
from setting import DATABASE, IP, PASSWORD, USERNAME
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

if __name__ == '__main__':
    engine = create_engine(
        'mysql+mysqldb://{username}:{password}@{ip}/{database}?charset=utf8'.format(
            username=USERNAME, password=PASSWORD, ip=IP, database=DATABASE),
        connect_args={'charset': 'UTF8'},
        echo=True,
        encoding='UTF-8')

    Base.metadata.create_all(engine)
