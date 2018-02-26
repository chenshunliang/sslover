# coding: utf-8
from sqlalchemy import (Column, DateTime, Float, ForeignKey, Integer, String,
                        Table, create_engine)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker

Base = declarative_base()


class User(Base):
    '''
    微信用户
    '''

    __tablename__ = 'user'

    id = Column(u'id', Integer, primary_key=True, autoincrement=True)
    open_id = Column(u'open_id', String(64), nullable=False, unique=True)
    nick_name = Column(u'nick_name', String(64))
    avatar_url = Column(u'avatar_url', String(300))
    gender = Column(u'gender', Integer)
    city = Column(u'city', String(20))
    province = Column(u'province', String(20))
    country = Column(u'country', String(20))
    joined_time = Column(u'joined_time', DateTime())

    def __str__(self):
        return self.nick_name


class Position(Base):
    '''
    签到地点
    '''

    __tablename__ = 'position'

    id = Column(u'id', Integer, primary_key=True, autoincrement=True)
    latitude = Column(u'latitude', Float, nullable=False)
    longitude = Column(u'longitude', Float, nullable=False)
    position_name = Column(u'position_name', String(50))
    address = Column(u'address', String(200))
    mood = Column(u'mood', String(500))
    location_date = Column(u'location_date', DateTime, index=True)

    user = Column(u'open_id', String(64), ForeignKey(
        'user.open_id'), index=True, nullable=False)

    def __str__(self):
        return self.position_name


class Photo(Base):
    '''
    相册
    '''

    __tablename__ = 'photo'

    id = Column(u'id', Integer, primary_key=True, autoincrement=True)
    file_name = Column(u'file_name', String(200))
    location_date = Column(u'location_date', DateTime, index=True)

    user = Column(u'open_id', String(64), ForeignKey(
        'user.open_id'), index=True, nullable=False)

    def __str__(self):
        return self.file_name


class PageAnalysis(Base):
    '''
    页面分析
    '''

    __tablename__ = 'analysis'

    id = Column(u'id', Integer, primary_key=True, autoincrement=True)

    def __str__(self):
        return ''
