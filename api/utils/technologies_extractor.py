def build_file():
    try:
        input_file = open('technologies.html', 'r')
        output_file = open('technologies.txt', 'a')
        lines = input_file.readlines()
        
        for line in lines:
            try:
                leftPointer = line.index('>')
                rightPointer = line.index('</a')
                term = line[leftPointer+1 : rightPointer]
                output_file.write(f'{term}\n')
            except: {} # If it is not possible to parse one line, just move forward

    except Exception as e:
        print(e)