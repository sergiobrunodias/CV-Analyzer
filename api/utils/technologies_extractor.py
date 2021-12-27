import os

import logging
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)

def build_file():
    try:
        input_file = open('/backend/utils/technologies.html', 'r')
        output_file = open('/backend/utils/technologies.txt', 'a')
        lines = input_file.readlines()
        
        for line in lines:
            try:
                leftPointer = line.index('>')
                rightPointer = line.index('</a')
                term = line[leftPointer+1 : rightPointer]

                # Removing achronyms
                achronym_index = term.find(' (')
                if achronym_index is not -1:
                    term = term[0 : achronym_index]

                logger.info(term)

                output_file.write(f'{term}\n')
            except: {} # If it is not possible to parse one line, just move forward

    except Exception as e:
        print(e)

def build_set():
    technologies_dict = {}
    try:
        file_path = os.path.join('/backend/utils/', 'technologies_short.txt')
        technologies_file = open(file_path, 'r')
        lines = technologies_file.readlines()
        
        for line in lines:
            technology = line[0:len(line)-1]
            technologies_dict[technology.lower()] = technology
    except Exception as e:
        print(e)
    
    return technologies_dict