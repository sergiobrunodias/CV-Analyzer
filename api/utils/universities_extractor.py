from utils.utils import log

def build_file():
    try:
        input_file = open('/backend/datasets/universities.html', 'r')
        output_file = open('/backend/datasets/universities.txt', 'a')
        content = input_file.read()

        start_index = 0
        while True: 
            index = content.find('2021-22/', start_index)
            if index is -1:
                break

            end_pointer = content.find('.php', start_index + 1)
            start_index = end_pointer # Update start index for next iteration
            
            term = content[index + 8 : end_pointer]
            if term.find('country') >= 0:
                continue

            university_instance = term.replace('-', ' ')
            output_file.write(f'{university_instance}\n')

        input_file.close()
        output_file.close()

    except Exception as e:
        log(e)