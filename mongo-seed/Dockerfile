FROM mongo

COPY init.json /init.json
CMD mongoimport --host db --db omnistack --collection devs --drop --file /init.json --jsonArray