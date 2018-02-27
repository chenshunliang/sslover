# coding: utf-8
from api import PhotoHandler, PositionHandler
from setting import DATABASE, IP, PASSWORD, USERNAME
from sqlalchemy.orm import sessionmaker

_engine = create_engine(
    'mysql+mysqldb://{username}:{password}@{ip}/{database}?charset=utf8'.format(
        username=USERNAME, password=PASSWORD, ip=IP, database=DATABASE),
    connect_args={'charset': 'UTF8'},
    echo=True,
    encoding='UTF-8')
_Session = sessionmaker(bind=_engine)
_session = _Session()

urls = [
    (r'/position/([0-9\w]+)', PositionHandler, dict(session=_session)),
    (r'/photo/(([0-9\w]+))', PhotoHandler, dict(session=_session)),
]
