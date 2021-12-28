import app
import nltk
import logging
import time
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)
from utils.utils import to_lower_all

def match_terms(file_content, sets_to_match):
    tokens = nltk.wordpunct_tokenize(file_content)
    logger.info(tokens)
    terms_to_match = to_lower_all(tokens)

    num_sets = len(sets_to_match)
    matched_terms = [set(), set()]
    i = 0
    while i < len(terms_to_match):
        term_str = ""
        if i < len(terms_to_match) - 1:
            joint_term = terms_to_match[i] + terms_to_match[i + 1]
            for set_index in range(0, num_sets):
                if (joint_term in sets_to_match[set_index]):
                    matched_terms[set_index].add(joint_term)
                    i += 1
                    break
        for j in range(0, 10):
            if i + j >= len(terms_to_match): break
            term_str += " " + terms_to_match[i + j] if term_str != "" else terms_to_match[i + j] 
            for set_index in range(0, num_sets):
                if term_str in sets_to_match[set_index]:
                    matched_terms[set_index].add(term_str)
        i += 1
    
    return list(map(lambda matched_set: list(matched_set), matched_terms))