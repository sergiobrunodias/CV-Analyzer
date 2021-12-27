import app
import nltk
import logging
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)

def parse_technologies(file_content):
    tokens = nltk.wordpunct_tokenize(file_content)
    tokens = list(map(lambda x: x.lower(), tokens))
    return match_terms(tokens, app.technologies)

def parse_designations(job_notice_content, terms_set):
    tokens = nltk.wordpunct_tokenize(job_notice_content)
    return match_terms(tokens, terms_set)

def match_terms(terms_to_match, terms_set):
    technologies = set()
    for index in range(len(terms_to_match)):
        # Firstly attempts to match a 3-term skill
        if index + 2 < len(terms_to_match):
            neighboring_words = f'{terms_to_match[index]} {terms_to_match[index + 1]} {terms_to_match[index + 2]}'
            if neighboring_words in terms_set:
                technologies.add(neighboring_words)
                continue

        # Attempts to match a 2-term skill
        if index + 1 < len(terms_to_match):
            neighboring_words = f'{terms_to_match[index]} {terms_to_match[index + 1]}'
            if neighboring_words in terms_set:
                technologies.add(neighboring_words)
                continue

        # Attempts to match a 1-term skill
        if terms_to_match[index] in terms_set:
            technologies.add(terms_to_match[index])

        if index + 1 < len(terms_to_match):
            neighboring_words = f'{terms_to_match[index]}{terms_to_match[index + 1]}'
            if neighboring_words in terms_set:
                technologies.add(neighboring_words)
                continue
            
    return list(technologies)
