from utils.utils import log

def build_file():
    try:
        input_file = open('/backend/datasets/technologies.html', 'r')
        output_file = open('/backend/datasets/technologies.txt', 'a')
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

                output_file.write(f'{term}\n')
            except: {} # If it is not possible to parse one line, just move forward

    except Exception as e:
        log(e)