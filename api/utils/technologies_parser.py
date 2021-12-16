import app
import nltk
import logging
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)

def parse_technologies(file_content):
    tokens = nltk.word_tokenize(file_content)
    technologies = set()
    logger.info(tokens)
    for index in range(len(tokens)):
        # Firstly attempts to match a 3-term skill
        if index + 2 < len(tokens):
            neighboring_words = f'{tokens[index]} {tokens[index + 1]} {tokens[index + 2]}'
            if neighboring_words in app.technologies:
                technologies.add(neighboring_words)
                continue

        # Attempts to match a 2-term skill
        if index + 1 < len(tokens):
            neighboring_words = f'{tokens[index]} {tokens[index + 1]}'
            if neighboring_words in app.technologies:
                technologies.add(neighboring_words)
                continue

        # Attempts to match a 1-term skill
        if tokens[index] in app.technologies:
            technologies.add(tokens[index])
            
    logger.info(technologies)
    return True
