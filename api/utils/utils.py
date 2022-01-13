import os
import logging
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)

def to_lower_all(list_arg):
    return list(map(lambda element: element.lower(), list_arg))

def capitalize_all(list_arg):
    return list(map(lambda element: element.title().replace("Of", "of"), list_arg))

def build_dict_from_dataset(file_name):
    dict = {}
    try:
        file_path = os.path.join('/backend/datasets/', file_name)
        file = open(file_path, 'r')
        lines = file.readlines()
        
        for line in lines:
            term = line[0:len(line)-1]
            dict[term.lower()] = term
    except Exception as e:
        print(e)
    
    return dict