import app
import nltk
import logging
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)

def parse_technologies(file_content):
    logger.info("Parse technologies")
    tokens = nltk.word_tokenize(file_content)
    technologies = set()
    for token in tokens:
        if token in app.technologies:
            technologies.add(token)
    logger.info(technologies)
    return True
