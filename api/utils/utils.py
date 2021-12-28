import logging
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)

def to_lower_all(list_arg):
    return list(map(lambda element: element.lower(), list_arg))

def capitalize_all(list_arg):
    return list(map(lambda element: element.title().replace("Of", "of"), list_arg))