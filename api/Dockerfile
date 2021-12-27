FROM rappdw/docker-java-python:openjdk1.8.0_171-python3.6.6
RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/requirements.txt

RUN pip install --upgrade pip && \
    pip install flask-cors --upgrade && \
    pip install tika --upgrade && \
    pip install resume-parser && \
    pip install -r requirements.txt \
    pip install beautifulsoup4

RUN pip install https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-2.3.1/en_core_web_sm-2.3.1.tar.gz && \
    pip install importlib-metadata==3.2.0 && \
    python -m nltk.downloader stopwords && \
    python -m nltk.downloader punkt && \
    python -m nltk.downloader averaged_perceptron_tagger && \
    python -m nltk.downloader universal_tagset && \
    python -m nltk.downloader wordnet && \
    python -m nltk.downloader brown && \
    python -m nltk.downloader maxent_ne_chunker

COPY . .