FROM rappdw/docker-java-python:openjdk1.8.0_171-python3.6.6
RUN mkdir /backend
WORKDIR /backend
COPY requirements.txt /backend/requirements.txt

RUN pip install --upgrade pip && \
    pip install flask-cors --upgrade && \
    pip install tika --upgrade && \
    pip install -r requirements.txt
COPY . .
